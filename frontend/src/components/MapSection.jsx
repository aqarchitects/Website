import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

/**
 * MapSection Component
 *
 * Displays a Google Maps embed with location information.
 *
 * @component
 */
const MapSection = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Location:
  const location = {
    address: "Business Avenue Building, 206, P.O. Box 20373, Dubai, UAE",
    lat: 25.258661,
    lng: 55.336161,
    // Google Maps embed URL with centered marker
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.354!2d55.336161!3d25.258661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE1JzMxLjIiTiA1NcKwMjAnMTAuMiJF!5e0!3m2!1sen!2sae!4v1234567890!5m2!1sen!2sae&center=25.258661,55.336161&zoom=16",
  };

  return (
    <section
      id="map"
      className="relative min-h-150 sm:min-h-175 md:min-h-225 py-8 md:py-8 lg:py-16 overflow-visible"
    >
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-12 lg:px-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <ScrollReveal direction="bottom" distance={120} duration={1.2}>
          <div className="flex flex-col items-start text-left space-y-8 md:space-y-10 lg:space-y-12">
            {/* Map Container */}
            <div className="w-full max-w-6xl">
              <div className="relative w-full h-96 md:h-125 lg:h-150 overflow-hidden border border-neutral-600">
                {/* Loading Placeholder */}
                {!mapLoaded && (
                  <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center ">
                    <div className="text-center">
                      <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                      <p className="text-neutral-600 text-sm">Loading map...</p>
                    </div>
                  </div>
                )}

                {/* Google Maps Embed */}
                <iframe
                  src={location.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AQ Architects Location"
                  onLoad={() => setMapLoaded(true)}
                  className="w-full h-full"
                />
              </div>

              {/* Location Info */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-primary mb-2">
                    Address
                  </h3>
                  <p className="text-base text-white">{location.address}</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-primary mb-2">
                    Get Directions
                  </h3>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-white hover:text-primary transition-colors underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MapSection;
