import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ServicesSlider Component
 *
 * Desktop: Infinite autoplay slider
 * Mobile: 3D coverflow effect
 */
const ServicesSlider = ({ services = [] }) => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ScrollReveal animation
  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 150,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  // Duplicate services for seamless loop
  const duplicatedServices = [...services, ...services];

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Desktop Slider */}
      {!isMobile && (
        <div className="relative">
          {/* Shadow gradients on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

          <Swiper
            modules={[FreeMode, Autoplay]}
            spaceBetween={30}
            slidesPerView="auto"
            centeredSlides={false}
            loop={true}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              stopOnLastSlide: false,
            }}
            speed={8000}
            allowTouchMove={false}
            simulateTouch={false}
            className="services-swiper-desktop"
          >
            {duplicatedServices.map((service, index) => (
              <SwiperSlide key={`${service.id}-${index}`} style={{ width: "auto", pointerEvents: "none" }}>
                <ServiceCard
                  service={service}
                  isMobile={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Mobile Slider - 3D Coverflow */}
      {isMobile && (
        <Swiper
          modules={[EffectCoverflow, Autoplay, FreeMode]}
          effect="coverflow"
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
          }}
          speed={3000}
          allowTouchMove={false}
          simulateTouch={false}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="services-swiper-mobile"
        >
          {duplicatedServices.map((service, index) => (
            <SwiperSlide key={`mobile-${service.id}-${index}`} style={{ width: "200px", pointerEvents: "none" }}>
              <ServiceCard
                service={service}
                isMobile={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

ServicesSlider.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

/**
 * ServiceCard Component
 * Individual service card with icon and title
 */
const ServiceCard = ({ service, isMobile }) => {
  return (
    <div
      className={`
        flex flex-col items-center justify-center
        p-6 sm:p-8 md:p-10
        transition-all duration-300
        ${isMobile ? "border border-primary/30 rounded-lg shadow-[0_0_10px_rgba(205,145,79,0.2)]" : ""}
      `}
      style={{
        background: "transparent",
        minWidth: isMobile ? "100px" : "180px",
      }}
    >
      {/* Icon */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 flex items-center justify-center">
        <img
          src={service.icon}
          alt={service.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-sm sm:text-base md:text-lg font-medium text-white text-center">
        {service.title}
      </h3>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default ServicesSlider;
