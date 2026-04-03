import { useParams, Navigate, Link } from "react-router-dom";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ProjectInfo from "../components/ProjectInfo";
import ProjectAnalysis from "../components/ProjectAnalysis";
import ProjectDescription from "../components/ProjectDescription";
import ProjectGallery from "../components/ProjectGallery";
import RelatedProjects from "../components/RelatedProjects";
import ScrollReveal from "../components/ScrollReveal";
import {
  getEnrichedProject,
  getThumbnailImage,
  getGalleryImages,
  getProjectAnalysis,
  getDescriptionBlocks,
  hasGalleryImages,
  getRelatedProjects,
  transformProjectsForGrid,
} from "../utils/projectHelpers";

const ProjectDetail = () => {
  const { slug } = useParams();

  // Get enriched project data
  const project = getEnrichedProject(slug);

  // If project not found, redirect to 404
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  // Get all project data
  const thumbnailImage = getThumbnailImage(project);
  const galleryImages = getGalleryImages(project);
  const analysis = getProjectAnalysis(project);
  const descriptionBlocks = getDescriptionBlocks(project);
  const relatedProjects = transformProjectsForGrid(getRelatedProjects(slug, 3));

  return (
    <>
      <SEO
        title={project.seo?.title || `${project.title} - AQ Design`}
        description={
          project.seo?.description ||
          `Explore ${project.title} - ${project.category?.name} project by AQ Architects`
        }
        keywords={project.seo?.keywords}
      />
      <Header />

      {/* Hero Section - Using thumbnail as background */}
      <PageHero
        backgroundImage={thumbnailImage}
        title={project.title}
        description={project.location || ""}
        showLearnMore={hasGalleryImages(project)}
        learnMoreText="View Gallery"
        learnMoreScrollTo="#gallery"
        height="h-[85vh]"
        grayscale={true}
        showBottomGradient={true}
      />

      {/* Project Info Section */}
      <ScrollReveal direction="left" distance={150} duration={1.2}>
        <ProjectInfo
          category={project.category}
          services={project.services}
          scopes={project.scopes}
        />
      </ScrollReveal>

      {/* Project Details Section */}
      <ScrollReveal direction="right" distance={150} duration={1.2} delay={0.1}>
        <ProjectAnalysis analysis={analysis} />
      </ScrollReveal>

      {/* Description Section */}
      <ProjectDescription descriptionBlocks={descriptionBlocks} />

      {/* Gallery Section */}
      <ProjectGallery galleryImages={galleryImages} />

      {/* Related Projects Section */}
      <ScrollReveal
        direction="bottom"
        distance={120}
        duration={1.3}
        delay={0.1}
      >
        <RelatedProjects projects={relatedProjects} />
      </ScrollReveal>

      {/* Back to Projects Button */}
      <ScrollReveal direction="bottom" distance={80} duration={1}>
        <div className="bg-black py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link
              to="/projects"
              className="inline-block text-primary font-semibold text-base sm:text-lg md:text-xl lg:text-[1.3125rem] leading-tight tracking-tight hover:opacity-80 transition-opacity duration-300"
              style={{
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Back to AQ Architects Projects
            </Link>
          </div>
        </div>
      </ScrollReveal>

      <Footer />
    </>
  );
};

export default ProjectDetail;
