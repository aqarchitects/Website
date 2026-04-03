import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import PropTypes from "prop-types";
import { useState } from "react";

/**
 * InfiniteSlider Component
 *
 * A reusable infinite auto-scrolling slider with shadow gradients on sides.
 * Can display images only or custom content via render prop.
 *
 * @component
 * @example
 * // Images only
 * <InfiniteSlider items={images} />
 *
 * @example
 * // Custom content with scale effect
 * <InfiniteSlider
 *   items={teamMembers}
 *   renderItem={(member) => <TeamMemberCard member={member} />}
 *   borderRadius="0.375rem 2.125rem"
 *   enableScale={true}
 *   scaleRange={[0.8, 1]}
 * />
 */
const InfiniteSlider = ({
  items = [],
  renderItem,
  slidesPerView = "auto",
  spaceBetween = 30,
  speed = 5000,
  delay = 0,
  slideWidth = "auto",
  showShadows = true,
  borderRadius = "0.375rem 2.125rem",
  enableScale = false,
  scaleRange = [0.05, 1],
}) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Check if device is mobile (screen width < 1024px)
  const isMobile = () => {
    return window.innerWidth < 1024;
  };

  // Calculate scale based on slide position
  const calculateScale = (slideProgress) => {
    // Only apply scale on mobile
    if (!enableScale || !isMobile()) return 1;

    const [minScale, maxScale] = scaleRange;

    // slideProgress: -1 (left edge) -> 0 (center) -> 1 (right edge)
    // We want: minScale (edges) -> maxScale (center)
    const absProgress = Math.abs(slideProgress);
    const scale = maxScale - (absProgress * (maxScale - minScale));

    return Math.max(minScale, Math.min(maxScale, scale));
  };

  // Handle slide progress change
  const handleProgress = (swiper) => {
    if (!enableScale) return;

    swiper.slides.forEach((slide) => {
      const slideProgress = slide.progress;
      const scale = calculateScale(slideProgress);

      slide.style.transform = `scale(${scale})`;
      slide.style.transition = 'transform 0.3s ease-out';
    });
  };

  return (
    <div className="relative w-full">
      {/* Shadow gradients on sides - Desktop only */}
      {showShadows && (
        <>
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-48 xl:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-48 xl:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        </>
      )}

      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        centeredSlides={false}
        loop={true}
        freeMode={{
          enabled: true,
          momentum: false,
          sticky: false,
        }}
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          reverseDirection: false,
        }}
        speed={speed}
        allowTouchMove={true}
        grabCursor={true}
        watchSlidesProgress={enableScale}
        onSwiper={setSwiperInstance}
        onProgress={handleProgress}
        onSlideChange={handleProgress}
        className="infinite-slider"
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id || index} style={{ width: slideWidth }}>
            {renderItem ? (
              renderItem(item, index, borderRadius)
            ) : (
              // Default: render image only
              <div
                className="w-full h-full overflow-hidden"
                style={{ borderRadius }}
              >
                <img
                  src={item.src || item.image || item}
                  alt={item.alt || `Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

InfiniteSlider.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func,
  slidesPerView: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  spaceBetween: PropTypes.number,
  speed: PropTypes.number,
  delay: PropTypes.number,
  slideWidth: PropTypes.string,
  showShadows: PropTypes.bool,
  borderRadius: PropTypes.string,
  enableScale: PropTypes.bool,
  scaleRange: PropTypes.arrayOf(PropTypes.number),
};

export default InfiniteSlider;

