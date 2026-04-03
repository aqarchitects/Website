import PropTypes from "prop-types";
import {
  TwitterIcon as GenericTwitterIcon,
  LinkedInIcon as GenericLinkedInIcon,
  InstagramIcon as GenericInstagramIcon,
  FacebookIcon as GenericFacebookIcon,
} from "../reusable/SocialIcons";

/**
 * Social Media Icon Components
 *
 * Project-specific wrappers for social media icons with AQ-Design branding.
 * Uses the generic SocialIcons components from reusable folder.
 * All icons use the primary brand color (#CD914F).
 *
 * @component
 */

// Twitter/X Icon
export const TwitterIcon = ({ className = "" }) => (
  <GenericTwitterIcon color="#CD914F" className={className} />
);

TwitterIcon.propTypes = {
  className: PropTypes.string,
};

// LinkedIn Icon
export const LinkedInIcon = ({ className = "" }) => (
  <GenericLinkedInIcon color="#CD914F" className={className} />
);

LinkedInIcon.propTypes = {
  className: PropTypes.string,
};

// Instagram Icon
export const InstagramIcon = ({ className = "" }) => (
  <GenericInstagramIcon color="#CD914F" className={className} />
);

InstagramIcon.propTypes = {
  className: PropTypes.string,
};

// Facebook Icon
export const FacebookIcon = ({ className = "" }) => (
  <GenericFacebookIcon color="#CD914F" className={className} />
);

FacebookIcon.propTypes = {
  className: PropTypes.string,
};
