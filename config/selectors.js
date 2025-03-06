// /config/selectors.js

/**
 * Animation selectors organized by animation category
 * Text: Animations that involve text splitting and manipulation
 * Reveal: Animations that show/hide elements
 * Stagger: Animations that affect multiple elements in sequence
 * Hover: Animations triggered by hover state
 */

const animationAttributeName = "data-ani";
const delayAttributeName = "data-ani-delay";

export const animationSelectors = {
  // Text-based animations (uses text splitting)
  text: {
    // displays: `[${animationAttributeName}="display"]`,
    headings: `[${animationAttributeName}="heading"]`,
    paragraphs: `[${animationAttributeName}="paragraph"]`,
    eyebrows: `[${animationAttributeName}="eyebrow"]`,
  },
  batch: {
    firstBatch: `[${animationAttributeName}="batch-fade"]`,
    secondBatch: `[${animationAttributeName}="batch-slide"]`,
    // Add more batch selectors as needed
  },
  stagger: {
    testimonials: ".splide__slide.is-testimonial",
    gallery: ".splide__slide.is-gallery",
    marquee: ".splide__slide.is-marquee",
    homePrograms: ".splide__slide.is-home-programs",
    textList: ".text-list_header, .text-list_richtext li",
  },
};
