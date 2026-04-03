import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

/**
 * FilterProjects Component
 *
 * Project filtering section with category dropdown, service filter, and year filter.
 *
 * @component
 */
const FilterProjects = ({
  categories = [],
  services = [],
  years = [],
  onCategoryChange,
  onServiceChange,
  onYearChange,
  defaultCategory = "All Categories",
  defaultService = "All Services",
  defaultYear = "All Years",
}) => {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [selectedService, setSelectedService] = useState(defaultService);
  const [selectedYear, setSelectedYear] = useState(defaultYear);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

  // Refs for click outside detection
  const categoryDropdownRef = useRef(null);
  const serviceDropdownRef = useRef(null);
  const yearDropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target)
      ) {
        setIsCategoryDropdownOpen(false);
      }
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(event.target)
      ) {
        setIsServiceDropdownOpen(false);
      }
      if (
        yearDropdownRef.current &&
        !yearDropdownRef.current.contains(event.target)
      ) {
        setIsYearDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsCategoryDropdownOpen(false);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setIsServiceDropdownOpen(false);
    if (onServiceChange) {
      onServiceChange(service);
    }
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsYearDropdownOpen(false);
    if (onYearChange) {
      onYearChange(year);
    }
  };

  return (
    <section className="relative bg-black py-12 md:py-16 lg:py-20 overflow-visible">
      {/* Content Container */}
      <div className="relative z-50 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
          {/* Filter by Category Dropdown */}
          <div className="flex flex-col gap-4" ref={categoryDropdownRef}>
            <h3
              className="text-base sm:text-lg font-medium"
              style={{ color: "#A2A5A9" }}
            >
              Filter by Category:
            </h3>
            <div className="relative z-100">
              <button
                onClick={() =>
                  setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                }
                className="
                  w-full sm:w-auto min-w-50 px-6 py-2.5
                  bg-transparent text-white border border-gray-700
                  font-medium text-sm sm:text-base
                  flex items-center justify-between gap-3
                  hover:border-primary hover:text-primary
                  transition-all duration-300
                "
                style={{ borderRadius: "0.625rem" }}
              >
                <span>{selectedCategory}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isCategoryDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isCategoryDropdownOpen && (
                <div
                  className="
                    absolute top-full mt-2 left-0 w-full
                    bg-gray-900
                    shadow-xl shadow-black/50
                    overflow-hidden z-100
                  "
                  style={{ borderRadius: "0.625rem" }}
                >
                  <button
                    onClick={() => handleCategorySelect("All Categories")}
                    className={`
                      w-full px-6 py-3 text-left text-sm sm:text-base
                      transition-colors duration-200
                      ${
                        selectedCategory === "All Categories"
                          ? "bg-primary text-black font-medium"
                          : "text-white hover:bg-gray-800 hover:text-primary"
                      }
                    `}
                  >
                    All Categories
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className={`
                        w-full px-6 py-3 text-left text-sm sm:text-base
                        transition-colors duration-200
                        ${
                          selectedCategory === category
                            ? "bg-primary text-black font-medium"
                            : "text-white hover:bg-gray-800 hover:text-primary"
                        }
                      `}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sort by Service Dropdown */}
          <div className="flex flex-col gap-4" ref={serviceDropdownRef}>
            <h3
              className="text-base sm:text-lg font-medium"
              style={{ color: "#A2A5A9" }}
            >
              Sort by Service:
            </h3>
            <div className="relative z-90">
              <button
                onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                className="
                  w-full sm:w-auto min-w-50 px-6 py-2.5
                  bg-transparent text-white border border-gray-700
                  font-medium text-sm sm:text-base
                  flex items-center justify-between gap-3
                  hover:border-primary hover:text-primary
                  transition-all duration-300
                "
                style={{ borderRadius: "0.625rem" }}
              >
                <span>{selectedService}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isServiceDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isServiceDropdownOpen && (
                <div
                  className="
                    absolute top-full mt-2 left-0 w-full
                    bg-gray-900
                    shadow-xl shadow-black/50
                    overflow-hidden z-90
                  "
                  style={{ borderRadius: "0.625rem" }}
                >
                  <button
                    onClick={() => handleServiceSelect("All Services")}
                    className={`
                      w-full px-6 py-3 text-left text-sm sm:text-base
                      transition-colors duration-200
                      ${
                        selectedService === "All Services"
                          ? "bg-primary text-black font-medium"
                          : "text-white hover:bg-gray-800 hover:text-primary"
                      }
                    `}
                  >
                    All Services
                  </button>
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => handleServiceSelect(service)}
                      className={`
                        w-full px-6 py-3 text-left text-sm sm:text-base
                        transition-colors duration-200
                        ${
                          selectedService === service
                            ? "bg-primary text-black font-medium"
                            : "text-white hover:bg-gray-800 hover:text-primary"
                        }
                      `}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Filter by Year Dropdown */}
          <div className="flex flex-col gap-4" ref={yearDropdownRef}>
            <h3
              className="text-base sm:text-lg font-medium"
              style={{ color: "#A2A5A9" }}
            >
              Filter by Year:
            </h3>
            <div className="relative z-80">
              <button
                onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                className="
                  w-full sm:w-auto min-w-50 px-6 py-2.5
                  bg-transparent text-white border border-gray-700
                  font-medium text-sm sm:text-base
                  flex items-center justify-between gap-3
                  hover:border-primary hover:text-primary
                  transition-all duration-300
                "
                style={{ borderRadius: "0.625rem" }}
              >
                <span>{selectedYear}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isYearDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isYearDropdownOpen && (
                <div
                  className="
                    absolute top-full mt-2 left-0 w-full
                    bg-gray-900
                    shadow-xl shadow-black/50
                    overflow-hidden z-80
                  "
                  style={{ borderRadius: "0.625rem" }}
                >
                  <button
                    onClick={() => handleYearSelect("All Years")}
                    className={`
                      w-full px-6 py-3 text-left text-sm sm:text-base
                      transition-colors duration-200
                      ${
                        selectedYear === "All Years"
                          ? "bg-primary text-black font-medium"
                          : "text-white hover:bg-gray-800 hover:text-primary"
                      }
                    `}
                  >
                    All Years
                  </button>
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => handleYearSelect(year)}
                      className={`
                        w-full px-6 py-3 text-left text-sm sm:text-base
                        transition-colors duration-200
                        ${
                          selectedYear === year
                            ? "bg-primary text-black font-medium"
                            : "text-white hover:bg-gray-800 hover:text-primary"
                        }
                      `}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FilterProjects.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  services: PropTypes.arrayOf(PropTypes.string),
  years: PropTypes.arrayOf(PropTypes.number),
  onCategoryChange: PropTypes.func,
  onServiceChange: PropTypes.func,
  onYearChange: PropTypes.func,
  defaultCategory: PropTypes.string,
  defaultService: PropTypes.string,
  defaultYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FilterProjects;
