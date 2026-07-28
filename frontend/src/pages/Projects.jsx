import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import FilterProjects from "../components/FilterProjects";
import ProjectsGrid from "../components/ProjectsGrid";
import { useState, useMemo } from "react";
import {
  getAllCategories,
  getAllServices,
  getAllYears,
  filterProjects,
  transformProjectsForGrid,
} from "../utils/projectHelpers";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Get all filter options
  const categories = useMemo(() => getAllCategories(), []);
  const services = useMemo(() => getAllServices(), []);
  const years = useMemo(() => getAllYears(), []);

  // Filter projects based on selected filters
  const filteredProjectsList = useMemo(() => {
    const filters = {};

    if (selectedCategory) {
      filters.category = selectedCategory;
    }

    if (selectedService) {
      filters.service = selectedService;
    }

    if (selectedYear) {
      filters.year = selectedYear;
    }

    const filtered = filterProjects(filters);
    // Transform projects to match ProjectsGrid component expectations
    return transformProjectsForGrid(filtered);
  }, [selectedCategory, selectedService, selectedYear]);

  const handleCategoryChange = (categoryName) => {
    // Handle "All Categories" option
    if (categoryName === "All Categories") {
      setSelectedCategory("");
      return;
    }

    // Convert category name to slug
    const category = categories.find((cat) => cat.name === categoryName);
    setSelectedCategory(category ? category.slug : "");
  };

  const handleServiceChange = (serviceName) => {
    // Handle "All Services" option
    if (serviceName === "All Services") {
      setSelectedService("");
      return;
    }

    // Convert service name to slug
    const service = services.find((svc) => svc.name === serviceName);
    setSelectedService(service ? service.slug : "");
  };

  const handleYearChange = (year) => {
    // Handle "All Years" option
    if (year === "All Years") {
      setSelectedYear("");
      return;
    }

    // Set the year directly
    setSelectedYear(year);
  };

  return (
    <>
      <SEO
        title="Projects - AQ Architects"
        description="Explore our portfolio of creative design projects"
      />
      <Header />

      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/project.jpg"
        logo="/logo/logo.svg"
        logoAlt="AQ Architects Logo"
        logoWidth="w-20 md:w-24 lg:w-28"
        customTitle={
          <>
            <span className="text-primary"> Projects</span>
          </>
        }
        description=""
        showLearnMore={true}
        learnMoreText="AQ Architects Projects"
        learnMoreScrollTo="#projects-grid"
      />

      {/* Filter Section */}
      <FilterProjects
        categories={categories.map((cat) => cat.name)}
        services={services.map((svc) => svc.name)}
        years={years}
        defaultCategory="All Categories"
        defaultService="All Services"
        defaultYear="All Years"
        onCategoryChange={handleCategoryChange}
        onServiceChange={handleServiceChange}
        onYearChange={handleYearChange}
      />

      {/* Projects Grid */}
      <ProjectsGrid projects={filteredProjectsList} />

      <Footer />
    </>
  );
};

export default Projects;
