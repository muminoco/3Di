import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_CONFIG = {
  markers: false,
  interval: 0,
  start: "top bottom",
  end: "bottom top",
  once: false,
};

const ANIMATION_PRESETS = {
  fadeIn: {
    from: {
      opacity: 0,
      overwrite: true,
    },
    to: {
      opacity: 1,
      stagger: { amount: 0.75, from: "random" },
      duration: 0.75,
      overwrite: true,
      ease: "sine.inOut",
    },
  },
  slideUp: {
    from: {
      autoAlpha: 0,
      yPercent: 15,
      overwrite: true,
    },
    to: {
      autoAlpha: 1,
      stagger: 0.15,
      yPercent: 0,
      duration: 0.75,
      overwrite: true,
    },
  },
  blurIn: {
    from: {
      opacity: 0,
      filter: "blur(8px)",
      scale: 0.8,
      overwrite: true,
    },
    to: {
      opacity: 1,
      filter: "blur(0px)",
      stagger: { amount: 0.75, from: "random" },
      scale: 1,
      duration: 0.75,
      overwrite: true,
      ease: "sine.inOut",
    },
  },
};

/**
 * Creates a batch scroll animation
 * @param {HTMLElement[]} elements - Target elements to animate
 * @param {Object} preset - Animation preset name or custom animation config
 * @param {Object} options - ScrollTrigger configuration options
 */
export function createBatchAnimation(
  elements,
  presetName = "fadeIn",
  options = {}
) {
  const preset = ANIMATION_PRESETS[presetName];
  if (!preset) {
    console.warn(`Animation preset "${presetName}" not found`);
    return;
  }

  const config = { ...DEFAULT_CONFIG, ...options };
  const { from, to } = preset;

  // Set initial state
  gsap.set(elements, from);

  ScrollTrigger.batch(elements, {
    ...config,
    onEnter: (batch) => gsap.fromTo(batch, from, to),
    ...(config.once
      ? {}
      : {
          onLeave: (batch) => gsap.set(batch, from),
          onEnterBack: (batch) => gsap.fromTo(batch, from, to),
          onLeaveBack: (batch) => gsap.set(batch, from),
        }),
  });
}

// Convenience export functions for common animations
export const batchEffects = {
  fadeIn: (elements, options) =>
    createBatchAnimation(elements, "fadeIn", options),
  slideUp: (elements, options) =>
    createBatchAnimation(elements, "slideUp", options),
  blurIn: (elements, options) =>
    createBatchAnimation(elements, "blurIn", options),
};

// Usage examples
// Simple usage
// batchEffects.fadeIn(elements);

// // With custom options
// batchEffects.slideUp(elements, {
//   interval: 0.1,
//   once: true,
//   markers: true
// });

// // Using the base function
// createBatchAnimation(elements, 'blurIn', {
//   start: "top center",
//   once: true
// });
