import PropTypes from "prop-types";
import { useState, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const ProjectGallery = ({ galleryImages, title = "Gallery" }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Don't render if no gallery images
  if (!galleryImages || galleryImages.length === 0) {
    return null;
  }

  // Alternate directions for gallery images
  const getDirection = (index) => {
    const directions = ["left", "right", "bottom", "top"];
    return directions[index % directions.length];
  };

  // Open modal with selected image
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === "ArrowLeft") {
      navigatePrevious();
    } else if (e.key === "ArrowRight") {
      navigateNext();
    }
  };

  // Navigate to previous image
  const navigatePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage.id,
    );
    const previousIndex =
      currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    setSelectedImage(galleryImages[previousIndex]);
  };

  // Navigate to next image
  const navigateNext = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage.id,
    );
    const nextIndex =
      currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(galleryImages[nextIndex]);
  };

  // Handle touch start
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Handle touch end - detect swipe direction
  const handleTouchEnd = () => {
    const swipeThreshold = 50; // Minimum distance for a swipe
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left - go to next image
        navigateNext();
      } else {
        // Swiped right - go to previous image
        navigatePrevious();
      }
    }

    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section id="gallery" className="relative bg-black py-16 md:py-24 z-20">
      <div className="relative z-20 container mx-auto px-4 max-w-7xl">
        <ScrollReveal direction="bottom" distance={120} duration={1.2}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
            {title}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <ScrollReveal
              key={image.id}
              direction={getDirection(index)}
              distance={150}
              duration={1.2}
              delay={index * 0.05}
            >
              <figure
                className="group relative overflow-hidden rounded-lg aspect-4/3 hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                onClick={() => openModal(image)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {image.caption && (
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase">
                    {image.caption}
                  </figcaption>
                )}
                {/* Click indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery modal"
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-50 text-white hover:text-primary transition-colors p-2"
            aria-label="Close modal"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigatePrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:text-primary transition-colors p-2"
            aria-label="Previous image"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:text-primary transition-colors p-2"
            aria-label="Next image"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            {selectedImage.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 to-transparent p-6 text-center">
                <p className="text-white text-base md:text-lg font-medium uppercase">
                  {selectedImage.caption}
                </p>
              </div>
            )}
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium">
            {galleryImages.findIndex((img) => img.id === selectedImage.id) + 1}{" "}
            / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

ProjectGallery.propTypes = {
  galleryImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      caption: PropTypes.string,
    }),
  ),
  title: PropTypes.string,
};

export default ProjectGallery;
