import DecorativeLine from "./DecorativeLine";
import InfiniteSlider from "./InfiniteSlider";
import ScrollReveal from "./ScrollReveal";
import PropTypes from "prop-types";

/**
 * TeamSection Component
 *
 * Displays the team section with title, description, decorative line, and infinite slider of team members.
 *
 * @component
 */
const TeamSection = ({ teamMembers = [] }) => {
  return (
    <section id="team" className="relative bg-black py-16 md:py-24 lg:py-32">
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-left text-left space-y-4 md:space-y-5 lg:space-y-6">
          {/* Row 1: Title */}
          <ScrollReveal direction="left" distance={150} duration={1.2}>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight tracking-tight"
              style={{ color: "#CD914F" }}
            >
              Meet <strong>The AQ® Team!</strong>
            </h2>
          </ScrollReveal>

          {/* Row 2: Description */}
          <ScrollReveal
            direction="right"
            distance={150}
            duration={1.2}
            delay={0.2}
          >
            <p
              className="text-base sm:text-lg font-normal leading-snug max-w-3xl"
              style={{ color: "#4B5254" }}
            >
              Our team at AQ Architects is composed of experienced architects,
              designers, and technical professionals who bring a rigorous and
              methodical approach to every stage of the design process. From
              initial concept development and feasibility studies to detailed
              design documentation, authority coordination, and construction
              supervision, we operate with precision and technical discipline.
              The team is proficient in advanced design technologies, BIM
              workflows, and multidisciplinary coordination, ensuring accuracy,
              efficiency, and seamless integration across all project phases.
              Through structured collaboration and strong technical expertise,
              we deliver architecture that is carefully resolved, buildable, and
              aligned with the highest professional standards. At the same time,
              we cultivate a collaborative studio culture that recognizes and
              nurtures talent, empowering our team to grow and contribute
              meaningfully.
            </p>
          </ScrollReveal>

          {/* Row 3: Decorative Line */}
          <ScrollReveal
            direction="left"
            distance={150}
            duration={1.2}
            delay={0.3}
          >
            <DecorativeLine />
          </ScrollReveal>
        </div>
      </div>

      {/* Row 4: Team Members Slider - Full Width */}
      <ScrollReveal
        direction="bottom"
        distance={150}
        duration={1.3}
        delay={0.4}
      >
        <div className="mt-12 md:mt-16 lg:mt-20">
          <InfiniteSlider
            items={teamMembers}
            renderItem={(member, _index, borderRadius) => (
              <TeamMemberCard member={member} borderRadius={borderRadius} />
            )}
            slideWidth="350px"
            spaceBetween={40}
            speed={3000}
            delay={1}
            showShadows={true}
            borderRadius="0.375rem 2.125rem"
            enableScale={true}
            scaleRange={[0.65, 1]}
          />
        </div>
      </ScrollReveal>
    </section>
  );
};

/**
 * TeamMemberCard Component
 *
 * Individual team member card with image, name, and job title.
 * 3 rows: image, name, job title
 */
const TeamMemberCard = ({ member, borderRadius = "0.375rem 2.125rem" }) => {
  return (
    <div className="flex flex-col items-center text-center group cursor-pointer">
      {/* Row 1: Image */}
      <div
        className="w-full aspect-square mb-4 overflow-hidden"
        style={{ borderRadius }}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Row 2: Name */}
      <h3
        className="text-xl sm:text-2xl font-semibold mb-2 leading-tight tracking-tight transition-colors duration-300 group-hover:text-primary"
        style={{ color: "#8D8D8D" }}
      >
        {member.name}
      </h3>

      {/* Row 3: Job Title */}
      <p
        className="text-base sm:text-lg font-normal leading-relaxed tracking-tight"
        style={{ color: "#5A5A5A" }}
      >
        {member.jobTitle}
      </p>
    </div>
  );
};

TeamMemberCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
  }).isRequired,
  borderRadius: PropTypes.string,
};

TeamSection.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
    }),
  ),
};

export default TeamSection;
