import { createFireOnceScrollTrigger } from "../utils/scrollTriggers.js";

/**
 * Base animation function that sets up common properties
 * @param {HTMLElement} element - Target element
 * @param {function} animationCallback - Function to create the timeline
 */
function createBaseAnimation(element, animationCallback) {
  const target = element;
  const tl = gsap.timeline({ paused: true });
  createFireOnceScrollTrigger(target, tl);
  animationCallback(target, tl);
}

export const revealEffects = {
  // Simple fade in
  reveal01(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        opacity: 0,
        duration: 0.75,
        delay,
        ease: "power2.out",
      });
    });
  },

  // Fade up
  reveal02(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        opacity: 0,
        yPercent: 50,
        duration: 1,
        delay,
        ease: "power2.out",
      });
    });
  },

  // Scale and fade
  reveal03(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        opacity: 0,
        scale: 0.5,
        duration: 1.2,
        delay,
        ease: "back.out(1.7)",
      });
    });
  },

  // Slide from left
  reveal04(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        opacity: 0,
        xPercent: -100,
        duration: 1,
        delay,
        ease: "power3.out",
      });
    });
  },

  // Slide from right
  reveal05(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        opacity: 0,
        xPercent: 100,
        duration: 1,
        delay,
        ease: "power3.out",
      });
    });
  },

  // Blur fade
  reveal06(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        opacity: 0,
        filter: "blur(20px)",
        duration: 1.2,
        delay,
        ease: "power2.out",
      });
    });
  },

  // 3D flip reveal
  reveal07(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        opacity: 0,
        rotationY: -90,
        duration: 1.2,
        delay,
        ease: "power3.out",
        transformPerspective: 1000,
        transformOrigin: "left center",
      });
    });
  },

  // Elastic bounce
  reveal08(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        opacity: 0,
        scale: 0.3,
        duration: 1.5,
        delay,
        ease: "elastic.out(1, 0.3)",
      });
    });
  },

  // Spiral entrance
  reveal09(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        opacity: 0,
        scale: 0,
        rotation: 180,
        duration: 1.2,
        delay,
        ease: "back.out(1.7)",
      });
    });
  },

  // Diagonal slide
  reveal10(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        opacity: 0,
        xPercent: -100,
        yPercent: 100,
        duration: 1.3,
        delay,
        ease: "power3.out",
      });
    });
  },

  // Squeeze pop
  reveal11(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        opacity: 0,
        scaleX: 2,
        scaleY: 0.5,
        duration: 1,
        delay,
        ease: "power2.out",
      });
    });
  },

  // Swing in
  reveal12(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        opacity: 0,
        rotation: 45,
        duration: 1.2,
        delay,
        ease: "power3.out",
        transformOrigin: "left bottom",
      });
    });
  },

  // Zoom perspective
  reveal13(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        opacity: 0,
        scale: 2,
        z: -1000,
        duration: 1.5,
        delay,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    });
  },

  // Split reveal
  reveal14(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      gsap.set(target, { overflow: "hidden" });
      tl.from(target, {
        clipPath: "inset(0 50% 0 50%)",
        duration: 1.2,
        delay,
        ease: "power3.inOut",
      });
    });
  },

  // Glitch reveal
  reveal15(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        opacity: 0,
        skewX: 20,
        duration: 0.2,
        delay,
      })
        .to(target, {
          skewX: -20,
          duration: 0.2,
        })
        .to(target, {
          skewX: 0,
          duration: 0.2,
        });
    });
  },

  // Bounce cascade
  reveal16(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        opacity: 0,
        yPercent: -200,
        duration: 1.5,
        delay,
        ease: "bounce.out",
      });
    });
  },

  // 3D flip and scale
  reveal17(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        opacity: 0,
        rotationX: 90,
        scale: 0.5,
        duration: 1.3,
        delay,
        ease: "power3.out",
        transformPerspective: 1000,
        transformOrigin: "center bottom",
      });
    });
  },

  // Circular reveal
  reveal18(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        clipPath: "circle(0% at center)",
        duration: 1.2,
        delay,
        ease: "power3.inOut",
      });
    });
  },

  // Elastic slide
  reveal19(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        opacity: 0,
        xPercent: -100,
        duration: 1.5,
        delay,
        ease: "elastic.out(1, 0.3)",
      });
    });
  },

  // Fade with letter spacing
  reveal20(element, delay = 0) {
    createBaseAnimation(element, (target, tl) => {
      tl.from(target, {
        opacity: 0,
        letterSpacing: "0.5em",
        duration: 1.2,
        delay,
        ease: "power2.out",
      });
    });
  },
};

/* Usage Examples:
revealEffects.reveal.reveal01(element, 0.5);  // Simple fade in
revealEffects.reveal.reveal02(element);       // Fade up
revealEffects.reveal.reveal03(element);       // Scale and fade
*/
