/**
 * Project-Specific Image Preloading Utilities
 *
 * Helper functions to extract and preload images from project data.
 * Integrates the reusable imagePreloader module with this project's data structure.
 *
 * @module PreloadImages
 * @category Utils
 */

import { getAllProjects } from "./projectHelpers";
import { homeProjectsData } from "../config/homeProjects";

/**
 * Extract all thumbnail images from projects
 * @param {Array} projects - Array of project objects
 * @returns {string[]} Array of thumbnail URLs
 */
export const extractThumbnails = (projects) => {
  const thumbnails = [];

  projects.forEach((project) => {
    // Get large thumbnail (primary)
    if (project.images?.thumbnail?.large) {
      thumbnails.push(project.images.thumbnail.large);
    }

    // Optionally include medium and small for responsive loading
    // if (project.images?.thumbnail?.medium) {
    //   thumbnails.push(project.images.thumbnail.medium);
    // }
    // if (project.images?.thumbnail?.small) {
    //   thumbnails.push(project.images.thumbnail.small);
    // }
  });

  return thumbnails;
};

/**
 * Extract all hero images from projects
 * @param {Array} projects - Array of project objects
 * @returns {string[]} Array of hero image URLs
 */
export const extractHeroImages = (projects) => {
  const heroes = [];

  projects.forEach((project) => {
    if (project.images?.hero) {
      heroes.push(project.images.hero);
    }
  });

  return heroes;
};

/**
 * Extract all gallery images from projects
 * @param {Array} projects - Array of project objects
 * @returns {string[]} Array of gallery image URLs
 */
export const extractGalleryImages = (projects) => {
  const galleries = [];

  projects.forEach((project) => {
    if (project.images?.gallery && Array.isArray(project.images.gallery)) {
      project.images.gallery.forEach((img) => {
        if (img.sizes?.large) {
          galleries.push(img.sizes.large);
        }
      });
    }
  });

  return galleries;
};

/**
 * Extract all images from a single project
 * @param {Object} project - Project object
 * @returns {Object} Object with categorized image URLs
 */
export const extractProjectImages = (project) => {
  return {
    thumbnail: project.images?.thumbnail?.large || null,
    hero: project.images?.hero || null,
    gallery: extractGalleryImages([project]),
  };
};

/**
 * Get all project thumbnails for Projects page
 * @returns {string[]} Array of all project thumbnail URLs
 */
export const getAllProjectThumbnails = () => {
  const projects = getAllProjects();
  return extractThumbnails(projects);
};

/**
 * Get home page project images
 * @returns {string[]} Array of home page project image URLs
 */
export const getHomePageImages = () => {
  return homeProjectsData.map((project) => project.image).filter(Boolean);
};

/**
 * Get all images from all projects (complete set)
 * @returns {Object} Object with categorized image arrays
 */
export const getAllProjectImages = () => {
  const projects = getAllProjects();

  return {
    thumbnails: extractThumbnails(projects),
    heroes: extractHeroImages(projects),
    galleries: extractGalleryImages(projects),
  };
};

/**
 * Get images for preloading strategy
 * @param {string} strategy - Preload strategy: 'minimal', 'moderate', 'aggressive'
 * @returns {Object} Object with priority-categorized image URLs
 */
export const getPreloadStrategy = (strategy = "moderate") => {
  const allImages = getAllProjectImages();
  const homeImages = getHomePageImages();

  switch (strategy) {
    case "minimal":
      // Only home page images + project thumbnails
      return {
        critical: homeImages,
        high: allImages.thumbnails,
        medium: [],
        low: [],
      };

    case "moderate":
      // Home images + thumbnails + some galleries
      return {
        critical: homeImages,
        high: allImages.thumbnails,
        medium: allImages.heroes,
        low: allImages.galleries.slice(0, 50), // First 50 gallery images
      };

    case "aggressive":
      // Everything
      return {
        critical: homeImages,
        high: allImages.thumbnails,
        medium: allImages.heroes,
        low: allImages.galleries,
      };

    default:
      return getPreloadStrategy("moderate");
  }
};

/**
 * Get total image count and estimated size
 * @returns {Object} Statistics about images
 */
export const getImageStats = () => {
  const allImages = getAllProjectImages();
  const totalCount =
    allImages.thumbnails.length +
    allImages.heroes.length +
    allImages.galleries.length;

  // Rough estimate: thumbnails ~300KB, heroes ~400KB, galleries ~350KB
  const estimatedSize =
    allImages.thumbnails.length * 0.3 +
    allImages.heroes.length * 0.4 +
    allImages.galleries.length * 0.35;

  return {
    thumbnails: allImages.thumbnails.length,
    heroes: allImages.heroes.length,
    galleries: allImages.galleries.length,
    total: totalCount,
    estimatedSizeMB: Math.round(estimatedSize),
  };
};
