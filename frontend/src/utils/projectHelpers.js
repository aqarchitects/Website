/**
 * Project Helper Functions
 * Utilities for working with projects.json data
 */

import projectsData from "../data/projects.json";

// ============================================================================
// GETTERS - Retrieve data from JSON
// ============================================================================

/**
 * Get all projects
 * @returns {Array} All projects
 */
export const getAllProjects = () => {
  return projectsData.projects;
};

/**
 * Get all categories
 * @returns {Array} All categories
 */
export const getAllCategories = () => {
  return projectsData.categories;
};

/**
 * Get all services
 * @returns {Array} All services
 */
export const getAllServices = () => {
  return projectsData.services;
};

/**
 * Get all scopes
 * @returns {Array} All scopes
 */
export const getAllScopes = () => {
  return projectsData.scopes;
};

/**
 * Get all unique years from projects (sorted descending)
 * @returns {Array} Array of unique years
 */
export const getAllYears = () => {
  const years = projectsData.projects
    .map((project) => project.year)
    .filter((year) => year); // Filter out null/undefined years

  // Get unique years and sort descending (newest first)
  return [...new Set(years)].sort((a, b) => b - a);
};

/**
 * Get single project by slug
 * @param {string} slug - Project slug
 * @returns {Object|null} Project object or null if not found
 */
export const getProjectBySlug = (slug) => {
  return projectsData.projects.find((project) => project.slug === slug) || null;
};

/**
 * Get single project by ID
 * @param {number} id - Project ID (numeric)
 * @returns {Object|null} Project object or null if not found
 */
export const getProjectById = (id) => {
  return (
    projectsData.projects.find((project) => project.id === Number(id)) || null
  );
};

/**
 * Get category by slug
 * @param {string} slug - Category slug
 * @returns {Object|null} Category object or null if not found
 */
export const getCategoryBySlug = (slug) => {
  return projectsData.categories.find((cat) => cat.slug === slug) || null;
};

/**
 * Get category by ID
 * @param {number} id - Category ID (numeric)
 * @returns {Object|null} Category object or null if not found
 */
export const getCategoryById = (id) => {
  return projectsData.categories.find((cat) => cat.id === Number(id)) || null;
};

/**
 * Get service by ID
 * @param {number} id - Service ID (numeric)
 * @returns {Object|null} Service object or null if not found
 */
export const getServiceById = (id) => {
  return projectsData.services.find((s) => s.id === Number(id)) || null;
};

/**
 * Get scope by ID
 * @param {number} id - Scope ID (numeric)
 * @returns {Object|null} Scope object or null if not found
 */
export const getScopeById = (id) => {
  return projectsData.scopes.find((s) => s.id === Number(id)) || null;
};

// ============================================================================
// FILTERS - Filter projects by various criteria
// ============================================================================

/**
 * Filter projects by category
 * @param {string} categorySlug - Category slug to filter by
 * @returns {Array} Filtered projects
 */
export const getProjectsByCategory = (categorySlug) => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return [];

  return projectsData.projects.filter(
    (project) => project.categoryId === category.id,
  );
};

/**
 * Filter projects by service
 * @param {string} serviceSlug - Service slug to filter by
 * @returns {Array} Filtered projects
 */
export const getProjectsByService = (serviceSlug) => {
  const service = projectsData.services.find((s) => s.slug === serviceSlug);
  if (!service) return [];

  return projectsData.projects.filter((project) =>
    project.serviceIds.includes(Number(service.id)),
  );
};

/**
 * Filter projects by scope
 * @param {string} scopeSlug - Scope slug to filter by
 * @returns {Array} Filtered projects
 */
export const getProjectsByScope = (scopeSlug) => {
  const scope = projectsData.scopes.find((s) => s.slug === scopeSlug);
  if (!scope) return [];

  return projectsData.projects.filter((project) =>
    project.scopeIds.includes(Number(scope.id)),
  );
};

/**
 * Filter projects by multiple criteria
 * @param {Object} filters - Filter object { category, service, scope, year }
 * @returns {Array} Filtered projects
 */
export const filterProjects = (filters = {}) => {
  let filtered = projectsData.projects;

  // Filter by category
  if (filters.category) {
    const category = getCategoryBySlug(filters.category);
    if (category) {
      filtered = filtered.filter((p) => p.categoryId === Number(category.id));
    }
  }

  // Filter by service
  if (filters.service) {
    const service = projectsData.services.find(
      (s) => s.slug === filters.service,
    );
    if (service) {
      filtered = filtered.filter((p) =>
        p.serviceIds.includes(Number(service.id)),
      );
    }
  }

  // Filter by scope
  if (filters.scope) {
    const scope = projectsData.scopes.find((s) => s.slug === filters.scope);
    if (scope) {
      filtered = filtered.filter((p) => p.scopeIds.includes(Number(scope.id)));
    }
  }

  // Filter by year
  if (filters.year) {
    filtered = filtered.filter((p) => p.year === Number(filters.year));
  }

  return filtered;
};

// ============================================================================
// ENRICHMENT - Add related data to projects
// ============================================================================

/**
 * Get project with enriched data (category, services, scopes objects)
 * @param {string} slug - Project slug
 * @returns {Object|null} Enriched project object or null
 */
export const getEnrichedProject = (slug) => {
  const project = getProjectBySlug(slug);
  if (!project) return null;

  return {
    ...project,
    category: getCategoryById(project.categoryId),
    services: project.serviceIds
      .map((id) => getServiceById(id))
      .filter(Boolean),
    scopes: project.scopeIds.map((id) => getScopeById(id)).filter(Boolean),
  };
};

/**
 * Get all projects with enriched data
 * @returns {Array} Array of enriched projects
 */
export const getAllEnrichedProjects = () => {
  return projectsData.projects.map((project) => ({
    ...project,
    category: getCategoryById(project.categoryId),
    services: project.serviceIds
      .map((id) => getServiceById(id))
      .filter(Boolean),
    scopes: project.scopeIds.map((id) => getScopeById(id)).filter(Boolean),
  }));
};

// ============================================================================
// IMAGE HELPERS - Get image URLs
// ============================================================================

/**
 * Get thumbnail image URL (large size only for now)
 * @param {Object} project - Project object
 * @returns {string} Thumbnail image URL
 */
export const getThumbnailImage = (project) => {
  return project.images?.thumbnail?.large || "";
};

/**
 * Get hero image URL
 * @param {Object} project - Project object
 * @returns {string} Hero image URL
 */
export const getHeroImage = (project) => {
  return project.images?.hero || "";
};

/**
 * Get gallery images (large size only for now)
 * @param {Object} project - Project object
 * @returns {Array} Array of gallery image objects with large URLs
 */
export const getGalleryImages = (project) => {
  if (!project.images?.gallery) return [];

  return project.images.gallery.map((img) => ({
    id: img.id,
    url: img.sizes.large,
    caption: img.caption,
    alt: img.alt,
  }));
};

/**
 * Check if project has gallery images
 * @param {Object} project - Project object
 * @returns {boolean} True if project has gallery images
 */
export const hasGalleryImages = (project) => {
  return project.images?.gallery && project.images.gallery.length > 0;
};

// ============================================================================
// FORMATTING HELPERS - Format project data for display
// ============================================================================

/**
 * Format project details data (plot area, total area)
 * @param {Object} project - Project object
 * @returns {Array} Array of analysis items
 */
export const getProjectAnalysis = (project) => {
  const analysis = [];

  if (project.plotArea) {
    analysis.push({
      label: "Plot Area",
      value: project.plotArea,
    });
  }

  if (project.totalArea) {
    analysis.push({
      label: "Total Area",
      value: project.totalArea,
    });
  }

  if (project.location) {
    analysis.push({
      label: "Location",
      value: project.location,
    });
  }

  if (project.year) {
    analysis.push({
      label: "Year",
      value: project.year,
    });
  }

  if (project.client) {
    analysis.push({
      label: "Client",
      value: project.client,
    });
  }

  return analysis;
};

/**
 * Check if project has description
 * @param {Object} project - Project object
 * @returns {boolean} True if project has description
 */
export const hasDescription = (project) => {
  return project.description && project.description.length > 0;
};

/**
 * Get formatted description blocks
 * @param {Object} project - Project object
 * @returns {Array} Array of description blocks
 */
export const getDescriptionBlocks = (project) => {
  return project.description || [];
};

/**
 * Get project tags
 * @param {Object} project - Project object
 * @returns {Array} Array of tags
 */
export const getProjectTags = (project) => {
  return project.tags || [];
};

/**
 * Check if project has tags
 * @param {Object} project - Project object
 * @returns {boolean} True if project has tags
 */
export const hasTags = (project) => {
  return project.tags && project.tags.length > 0;
};

// ============================================================================
// UTILITY HELPERS
// ============================================================================

/**
 * Get total project count
 * @returns {number} Total number of projects
 */
export const getProjectCount = () => {
  return projectsData.projects.length;
};

/**
 * Get project count by category
 * @param {string} categorySlug - Category slug
 * @returns {number} Number of projects in category
 */
export const getProjectCountByCategory = (categorySlug) => {
  return getProjectsByCategory(categorySlug).length;
};

/**
 * Get related projects (same category, excluding current project)
 * @param {string} projectSlug - Current project slug
 * @param {number} limit - Maximum number of related projects (default: 3)
 * @returns {Array} Array of related projects
 */
export const getRelatedProjects = (projectSlug, limit = 3) => {
  const project = getProjectBySlug(projectSlug);
  if (!project) return [];

  return projectsData.projects
    .filter(
      (p) => p.categoryId === project.categoryId && p.slug !== projectSlug,
    )
    .slice(0, limit);
};

/**
 * Transform project data for ProjectsGrid component
 * Converts new data structure to match component expectations
 * @param {Object} project - Project object from projects.json
 * @returns {Object} Transformed project object
 */
export const transformProjectForGrid = (project) => {
  const category = getCategoryById(project.categoryId);

  // Get first paragraph from description array
  let descriptionText = "";
  if (project.description && project.description.length > 0) {
    const firstParagraph = project.description.find(
      (d) => d.type === "paragraph",
    );
    descriptionText = firstParagraph ? firstParagraph.content : "";
  }

  return {
    id: project.id,
    title: project.title,
    slug: project.slug,
    image: getThumbnailImage(project),
    description: descriptionText,
    location: project.location || "Location TBD",
    category: category ? category.name : "",
    status: project.status || "",
  };
};

/**
 * Transform multiple projects for ProjectsGrid component
 * @param {Array} projects - Array of project objects
 * @returns {Array} Array of transformed project objects
 */
export const transformProjectsForGrid = (projects) => {
  return projects.map(transformProjectForGrid);
};
