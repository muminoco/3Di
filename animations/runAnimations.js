// src/runners/textAnimationRunner.js

import { animationSelectors } from "../config/selectors.js";
import { revealEffects } from "./global/reveal.js";
import { textEffects } from "./global/text.js";
import { staggerEffects } from "./global/stagger.js";

const delayAttributeName = "data-ani-delay";

/**
 * Get animation delay from element's data-ani-delay attribute
 * @param {HTMLElement} element - The element to check for delay
 * @returns {number} Delay in seconds (0 if no delay set)
 */
function getDelay(element) {
  // If attribute doesn't exist, return 0
  if (!element.hasAttribute(`${delayAttributeName}`)) return 0;

  const delay = element.getAttribute(`${delayAttributeName}`);

  // If delay isn't a valid number, return 0
  const delayNumber = parseInt(delay);
  if (isNaN(delayNumber)) return 0;

  // Convert milliseconds to seconds
  return delayNumber / 1000;
}

/**
 * Check if a selector exists in our animation selectors config
 * @param {string} selector - The selector to check
 * @returns {boolean} True if selector exists in config
 */
function selectorExistsInConfig(selector) {
  // Check each category in animationSelectors
  const allCategories = [
    animationSelectors.text,
    animationSelectors.reveal,
    animationSelectors.stagger,
  ];

  // Look through all categories for this selector
  return allCategories.some((category) =>
    Object.values(category).includes(selector)
  );
}

/**
 * Determine if an animation function is a stagger effect
 * @param {Function} animationFunction - The animation function to check
 * @returns {boolean} True if the function is a stagger effect
 */
function isStaggerAnimation(animationFunction) {
  return Object.values(staggerEffects).includes(animationFunction);
}

/**
 * Animate elements with support for both single and stagger animations
 * @param {string} selector - CSS selector to find elements
 * @param {Function} animationFunction - Animation to apply
 * @param {string} type - Name of animation for error logging
 */
function animateElements(selector, animationFunction, type) {
  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) {
    if (selectorExistsInConfig(selector)) {
      console.info(
        `No elements found for "${type}" animation with selector: ${selector}`
      );
    }
    return;
  }

  console.info(`Animating ${elements.length} ${type} element(s)`);

  // Handle stagger animations differently from single-element animations
  if (isStaggerAnimation(animationFunction)) {
    try {
      // For stagger animations, we pass all elements at once
      // Get delay from the first element (if it exists)
      const delay = elements.length > 0 ? getDelay(elements[0]) : 0;
      animationFunction(elements, delay);
    } catch (error) {
      console.warn(`Failed to animate ${type} stagger elements:`, error);
      console.warn("Problem elements:", elements);
    }
  } else {
    // For single-element animations, we animate each element individually
    elements.forEach((element) => {
      try {
        const delay = getDelay(element);
        animationFunction(element, delay);
      } catch (error) {
        console.warn(`Failed to animate ${type} element:`, error);
        console.warn("Problem element:", element);
      }
    });
  }
}

/**
 * Run all text-based animations (character, word, and line animations)
 */
function runTextAnimations() {
  const { text } = animationSelectors;

  //  animateElements(text.headings, textEffects.line.line08, "Name of the element for debugging purposes");
  animateElements(text.headings, textEffects.line.line21, "heading");

  animateElements(text.paragraphs, revealEffects.reveal01, "paragraph");
  animateElements(text.eyebrows, revealEffects.reveal01, "eyebrows");
  // Simple fade in
}

/**
 * Run all reveal animations (fade in, fade up, etc.)
 */
function runRevealAnimations() {}

/**
 * Run all stagger animations (lists, grids, etc.)
 */
function runStaggerAnimations() {
  const { stagger } = animationSelectors;
  animateElements(
    stagger.testimonials,
    staggerEffects.stagger01,
    "testimonials"
  );
  animateElements(stagger.gallery, staggerEffects.stagger01, "gallery image");
  animateElements(stagger.textList, staggerEffects.stagger01, "text list");
  animateElements(stagger.marquee, staggerEffects.stagger01, "marquee");
}

/**
 * Initialize all text animations
 * This is the main function exported and called by mumino.js
 */
function initializeAnimations() {
  document.addEventListener("DOMContentLoaded", () => {
    runTextAnimations();
    runStaggerAnimations();
  });
}

export { initializeAnimations };
