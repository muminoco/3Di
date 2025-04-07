// text-animations.js - Minimalist starter file for text animations
import { createFireOnceScrollTrigger } from "../utils/scrollTriggers.js";
import { splitTextForAnimation, SPLIT_TYPES } from "../utils/textSplitter.js";

// Animation selectors
const animationAttributeName = "data-ani";
const delayAttributeName = "data-ani-delay";

/**
 * Define all animations with their selectors and animation functions
 * This is the SINGLE source of truth for animations
 */
export const animations = {
  // Title animations
  title: {
    selector: `[${animationAttributeName}="title"]`,
    animate: (element, delay = 0) => {
      splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

      createBaseAnimation(element, (target, tl) => {
        const words = target.querySelectorAll(".word");
        tl.from(words, {
          y: 0,
          opacity: 0,
          duration: 0.75,
          delay,
          stagger: 0.1,
          ease: "back.out(1.7)",
        });
      });
    },
  },

  // Heading animations
  heading: {
    selector: `[${animationAttributeName}="heading"]`,
    animate: (element, delay = 0) => {
      splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

      createBaseAnimation(element, (target, tl) => {
        gsap.set(element, { overflow: "hidden" });
        const lines = target.querySelectorAll(".line");
        tl.from(lines, {
          yPercent: 100,
          opacity: 0,
          duration: 0.75,
          color: "#c15224", // Default color transition - customize as needed
          delay,
          stagger: 0.2,
          ease: "power4.out",
        });
      });
    },
  },

  // Paragraph animations
  paragraph: {
    selector: `[${animationAttributeName}="paragraph"]`,
    animate: (element, delay = 0) => {
      splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

      createBaseAnimation(element, (target, tl) => {
        gsap.set(element, { overflow: "hidden" });
        const lines = target.querySelectorAll(".line");
        tl.from(lines, {
          yPercent: 25,
          opacity: 0,
          duration: 0.5,
          color: "#c15224", // Default color transition - customize as needed
          delay,
          stagger: 0.1,
          ease: "power3.out",
        });
      });
    },
  },

  // // Eyebrow animations
  eyebrow: {
    selector: `[${animationAttributeName}="eyebrow"]`,
    animate: (element, delay = 0) => {
      splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

      createBaseAnimation(element, (target, tl) => {
        const words = target.querySelectorAll(".word");
        tl.from(words, {
          yPercent: -20,
          opacity: 0,
          stagger: 0.05,
          duration: 0.75,
          delay,
          ease: "sine.out",
        });
      });
    },
  },

  // Add new animation types here (example commented out)
  // button: {
  //   selector: `[${animationAttributeName}="button"]`,
  //   animate: (element, delay = 0) => {
  //     createBaseAnimation(element, (target, tl) => {
  //       tl.from(target, {
  //         scale: 0.9,
  //         opacity: 0,
  //         duration: 0.75,
  //         delay,
  //         ease: "back.out(1.7)",
  //       });
  //     });
  //   }
  // },
};

/**
 * Get animation delay from element's data-ani-delay attribute
 * @param {HTMLElement} element - The element to check for delay
 * @returns {number} Delay in seconds (0 if no delay set)
 */
function getDelay(element) {
  if (!element.hasAttribute(delayAttributeName)) return 0;

  const delay = element.getAttribute(delayAttributeName);
  const delayNumber = parseInt(delay);
  if (isNaN(delayNumber)) return 0;

  return delayNumber / 1000;
}

/**
 * Base animation function that sets up common properties
 * @param {HTMLElement} element - Target element
 * @param {function} animationCallback - Function to create the timeline
 */
function createBaseAnimation(element, animationCallback) {
  gsap.set(element, { opacity: 1 });
  const target = element;
  const tl = gsap.timeline({ paused: true });
  createFireOnceScrollTrigger(target, tl);
  animationCallback(target, tl);
}

/**
 * Run all text animations by looping through the animations object
 * Includes error handling for missing selectors
 */
export function runTextAnimations() {
  try {
    // Loop through each animation type in our animations object
    Object.entries(animations).forEach(([name, animationType]) => {
      try {
        // Get all elements matching this animation's selector
        const elements = document.querySelectorAll(animationType.selector);

        // Skip if no elements found
        if (elements.length === 0) {
          console.info(`No elements found for "${name}" animation`);
          return; // Skip this animation type and continue with others
        }

        // Apply the animation to each element
        elements.forEach((element) => {
          try {
            const delay = getDelay(element);
            animationType.animate(element, delay);
          } catch (elementError) {
            // Log error but continue with other elements
            console.warn(`Error animating ${name} element:`, elementError);
          }
        });
      } catch (typeError) {
        // Log error but continue with other animation types
        console.warn(`Error processing animation type "${name}":`, typeError);
      }
    });
  } catch (globalError) {
    // Log any overall errors
    console.error("Error in runTextAnimations:", globalError);
  }
}

/**
 * Initialize all text animations
 * Call this function from your main JS file
 */
export function initializeTextAnimations() {
  document.addEventListener("DOMContentLoaded", () => {
    runTextAnimations();
  });
}
