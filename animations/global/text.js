import { createFireOnceScrollTrigger } from "../utils/scrollTriggers.js";
import { splitTextForAnimation, SPLIT_TYPES } from "../utils/textSplitter.js";

// Default animation settings
const DEFAULT = {
  duration: 0.75,
  ease: "sine.out",
  delay: 0,
  stagger: {
    amount: 1,
  },
};

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

/*
 * Line-Based Animations
 * These animations split text into lines and animate them
 */
const lineAnimations = {
  // Elegant fade in with scale
  line01(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        delay,
        stagger: { amount: 0.4 },
        ease: "power2.out",
      });
    });
  },

  // Slide up reveal with fade
  line02(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        delay,
        stagger: 0.1,
        ease: "power3.out",
      });
    });
  },

  // Cascade from left with rotation
  line03(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        xPercent: -50,
        opacity: 0,
        rotation: -5,
        duration: 1.2,
        delay,
        stagger: { amount: 0.25 },
        ease: "power2.inOut",
      });
    });
  },

  // Elastic bounce entrance
  line04(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        yPercent: -100,
        opacity: 0,
        duration: 1.5,
        delay,
        stagger: { amount: 0.4 },
        ease: "elastic.out(1, 0.5)",
      });
    });
  },

  // Smooth scale reveal
  line05(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        scale: 1.2,
        opacity: 0,
        duration: 1,
        delay,
        stagger: { amount: 0.3 },
        ease: "back.out(1.7)",
      });
    });
  },

  // Staggered blur reveal
  line06(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        filter: "blur(20px)",
        opacity: 0,
        duration: 1.2,
        delay,
        stagger: { amount: 0.4 },
        ease: "power2.out",
      });
    });
  },

  // Diagonal slide with fade
  line07(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        xPercent: -30,
        yPercent: 100,
        opacity: 0,
        duration: 1.1,
        delay,
        stagger: { amount: 0.35 },
        ease: "power3.out",
      });
    });
  },

  // Flip reveal
  line08(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        rotationX: -90,
        opacity: 0,
        duration: 1.3,
        delay,
        stagger: { amount: 0.4 },
        ease: "power2.out",
        transformOrigin: "center center",
      });
    });
  },

  // Squeeze and fade
  line09(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        scaleX: 1.5,
        scaleY: 0.5,
        opacity: 0,
        duration: 1,
        delay,
        stagger: { amount: 0.3 },
        ease: "power2.out",
      });
    });
  },

  // Slide alternating sides
  line10(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      lines.forEach((line, index) => {
        tl.from(
          line,
          {
            xPercent: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 1,
            delay: delay + index * 0.15,
            ease: "power2.out",
          },
          0
        );
      });
    });
  },

  // Wave effect
  line11(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        yPercent: 50,
        rotation: 5,
        opacity: 0,
        duration: 1.2,
        delay,
        stagger: {
          amount: 0.5,
          ease: "sine.inOut",
        },
        ease: "power2.out",
      });
    });
  },

  // Zoom perspective
  line12(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        z: -500,
        opacity: 0,
        duration: 1.4,
        delay,
        stagger: { amount: 0.4 },
        ease: "power2.out",
        transformOrigin: "center center",
      });
    });
  },

  // Curtain reveal
  line13(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.2,
        delay,
        stagger: { amount: 0.4 },
        ease: "power3.inOut",
      });
    });
  },

  // Spiral entrance
  line14(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        rotation: 180,
        scale: 0,
        opacity: 0,
        duration: 1.3,
        delay,
        stagger: { amount: 0.4 },
        ease: "back.out(1.7)",
        transformOrigin: "center center",
      });
    });
  },

  // Bounce cascade
  line15(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        yPercent: -200,
        opacity: 0,
        duration: 1.2,
        delay,
        stagger: { amount: 0.5 },
        ease: "bounce.out",
      });
    });
  },

  // Smooth slide with rotation
  line16(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        xPercent: -50,
        rotation: -15,
        opacity: 0,
        duration: 1.1,
        delay,
        stagger: { amount: 0.3 },
        ease: "power3.out",
        transformOrigin: "left center",
      });
    });
  },

  // Split reveal
  line17(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      lines.forEach((line, index) => {
        tl.from(
          line,
          {
            clipPath:
              index % 2 === 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
            duration: 1.2,
            delay: delay + index * 0.1,
            ease: "power2.inOut",
          },
          0
        );
      });
    });
  },

  // Elastic swing
  line18(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        rotation: 15,
        yPercent: 100,
        opacity: 0,
        duration: 1.5,
        delay,
        stagger: { amount: 0.4 },
        ease: "elastic.out(1, 0.3)",
        transformOrigin: "left bottom",
      });
    });
  },

  // Fade with letter spacing
  line19(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        letterSpacing: "0.5em",
        opacity: 0,
        duration: 1.2,
        delay,
        stagger: { amount: 0.3 },
        ease: "power2.out",
      });
    });
  },

  // Perspective flip cascade
  line20(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        rotationY: -90,
        opacity: 0,
        duration: 1.4,
        delay,
        stagger: { amount: 0.4 },
        ease: "power3.out",
        transformOrigin: "left center",
      });
    });
  },

  line21(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      gsap.set(element, { overflow: "hidden" });
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        yPercent: -50,
        opacity: 0,
        duration: 1,
        color: "#c15224",
        delay,
        stagger: 0.3,
        ease: "expo.out",
      });
    });
  },
};

/*
 * Word-Based Animations
 * These animations split text into words and animate them
 */
const wordAnimations = {
  // Elegant fade up with blur
  word01(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      tl.from(words, {
        filter: "blur(3px)",
        opacity: 0,
        yPercent: 50,
        duration: 0.8,
        delay,
        stagger: 0.03,
        ease: "power2.out",
      });
    });
  },

  // Bounce scale entrance
  word02(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      tl.from(words, {
        scale: 0.3,
        opacity: 0,
        duration: 0.8,
        delay,
        stagger: 0.05,
        ease: "back.out(1.7)",
      });
    });
  },

  // Slide from sides alternating
  word03(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      words.forEach((word, index) => {
        tl.from(
          word,
          {
            xPercent: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 0.7,
            delay: delay + index * 0.05,
            ease: "power2.out",
          },
          0
        );
      });
    });
  },

  // Typewriter effect with cursor
  word04(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS, SPLIT_TYPES.CHARS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      const chars = target.querySelectorAll(".char");

      tl.from(chars, {
        opacity: 0,
        duration: 0.05,
        delay,
        stagger: 0.03,
        ease: "none",
      }).to(words, {
        borderRight: "none",
        duration: 0.1,
      });
    });
  },

  // 3D rotation reveal
  word05(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      tl.from(words, {
        rotationY: -90,
        opacity: 0,
        duration: 0.8,
        delay,
        stagger: 0.04,
        ease: "power2.out",
        transformOrigin: "left center",
      });
    });
  },

  // Elastic drop in
  word06(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      tl.from(words, {
        yPercent: -100,
        opacity: 0,
        duration: 1.2,
        delay,
        stagger: 0.06,
        ease: "elastic.out(1, 0.3)",
      });
    });
  },

  // Letter spacing reveal
  word07(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      tl.from(words, {
        letterSpacing: "0.5em",
        opacity: 0,
        duration: 1,
        delay,
        stagger: 0.04,
        ease: "power2.out",
      });
    });
  },

  // Spiral entrance
  word08(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      tl.from(words, {
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 0.8,
        delay,
        stagger: 0.05,
        ease: "back.out(1.7)",
        transformOrigin: "center center",
      });
    });
  },

  // Slide up with character cascade
  word09(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS, SPLIT_TYPES.CHARS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      words.forEach((word) => {
        const chars = word.querySelectorAll(".char");
        tl.from(
          chars,
          {
            yPercent: 100,
            opacity: 0,
            duration: 0.5,
            stagger: 0.02,
            ease: "power2.out",
          },
          delay
        );
        delay += 0.1;
      });
    });
  },

  // Wave motion
  word10(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      tl.from(words, {
        yPercent: 50,
        rotation: 5,
        opacity: 0,
        duration: 1,
        delay,
        stagger: {
          amount: 0.5,
          ease: "sine.inOut",
        },
        ease: "power2.out",
      });
    });
  },

  // Squeeze pop
  word11(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      tl.from(words, {
        scale: 1.5,
        opacity: 0,
        duration: 0.7,
        delay,
        stagger: 0.04,
        ease: "back.out(2)",
      });
    });
  },

  // Random position fade
  word12(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      words.forEach((word) => {
        const randomX = Math.random() * 100 - 50;
        const randomY = Math.random() * 100 - 50;
        tl.from(
          word,
          {
            x: randomX,
            y: randomY,
            opacity: 0,
            duration: 0.8,
            delay,
            ease: "power2.out",
          },
          delay
        );
      });
    });
  },

  // Flip and slide
  word13(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      tl.from(words, {
        rotationX: 90,
        yPercent: 100,
        opacity: 0,
        duration: 0.9,
        delay,
        stagger: 0.05,
        ease: "power2.out",
        transformOrigin: "center bottom",
      });
    });
  },

  // Zoom perspective
  word14(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      tl.from(words, {
        z: -500,
        opacity: 0,
        duration: 1,
        delay,
        stagger: 0.06,
        ease: "power2.out",
        transformPerspective: 500,
      });
    });
  },

  // Elastic swing
  word15(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      tl.from(words, {
        rotation: 45,
        opacity: 0,
        duration: 1.2,
        delay,
        stagger: 0.05,
        ease: "elastic.out(1, 0.3)",
        transformOrigin: "center bottom",
      });
    });
  },

  // Cross fade
  word16(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      words.forEach((word, index) => {
        tl.from(
          word,
          {
            xPercent: index % 2 === 0 ? -20 : 20,
            yPercent: index % 2 === 0 ? -50 : 50,
            rotation: index % 2 === 0 ? -15 : 15,
            opacity: 0,
            duration: 0.8,
            delay: delay + index * 0.05,
            ease: "power2.out",
          },
          delay
        );
      });
    });
  },

  // Character rotation cascade
  word17(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS, SPLIT_TYPES.CHARS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      words.forEach((word) => {
        const chars = word.querySelectorAll(".char");
        tl.from(
          chars,
          {
            rotation: 180,
            opacity: 0,
            duration: 0.6,
            stagger: 0.03,
            ease: "back.out(1.7)",
            transformOrigin: "center center",
          },
          delay
        );
        delay += 0.1;
      });
    });
  },

  // Bounce scatter
  word18(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      tl.from(words, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay,
        stagger: {
          amount: 0.5,
          from: "random",
        },
        ease: "bounce.out",
      });
    });
  },

  // Glitch effect
  word19(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      words.forEach((word) => {
        tl.from(word, {
          opacity: 0,
          duration: 0.1,
          delay,
          skewX: 20,
          ease: "power1.inOut",
        })
          .to(word, {
            skewX: -20,
            duration: 0.1,
            ease: "power1.inOut",
          })
          .to(word, {
            skewX: 0,
            duration: 0.1,
            ease: "power1.out",
          });
        delay += 0.1;
      });
    });
  },

  // Smooth scale wave
  word20(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      tl.from(words, {
        scale: 0.7,
        opacity: 0,
        duration: 1,
        delay,
        stagger: {
          amount: 0.6,
          ease: "sine.inOut",
        },
        ease: "power2.out",
      });
    });
  },
};

/**
 * Character-Based Animations
 * These animations split text into individual characters and animate them
 */
const letterAnimations = {
  // Elegant fade with scale and color
  letter01(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      tl.from(chars, {
        scale: 0.2,
        opacity: 0,
        color: "#64748b",
        duration: 0.8,
        delay,
        stagger: 0.02,
        ease: "back.out(1.7)",
        transformOrigin: "center center",
      });
    });
  },

  // Cascade drop with bounce
  letter02(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      tl.from(chars, {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        delay,
        stagger: 0.03,
        ease: "bounce.out",
      });
    });
  },

  // Spiral in with fade
  letter03(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      tl.from(chars, {
        rotation: 180,
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay,
        stagger: 0.02,
        ease: "power2.out",
        transformOrigin: "center center",
      });
    });
  },

  // Wave motion
  letter04(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      tl.from(chars, {
        yPercent: 50,
        rotation: 15,
        opacity: 0,
        duration: 1,
        delay,
        stagger: {
          each: 0.03,
          ease: "sine.inOut",
        },
        ease: "power2.out",
      });
    });
  },

  // 3D flip reveal
  letter05(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      tl.from(chars, {
        rotationY: -90,
        opacity: 0,
        duration: 0.8,
        delay,
        stagger: 0.02,
        ease: "power3.out",
        transformOrigin: "left center",
      });
    });
  },

  // Elastic stretch
  letter06(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      tl.from(chars, {
        scaleY: 3,
        opacity: 0,
        duration: 1.2,
        delay,
        stagger: 0.03,
        ease: "elastic.out(1, 0.3)",
      });
    });
  },

  // Random position scatter
  letter07(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      chars.forEach((char) => {
        const randomX = Math.random() * 100 - 50;
        const randomY = Math.random() * 100 - 50;
        tl.from(
          char,
          {
            x: randomX,
            y: randomY,
            opacity: 0,
            duration: 1,
            delay,
            ease: "power2.out",
          },
          delay
        );
      });
    });
  },

  // Typewriter with cursor
  letter08(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      tl.from(chars, {
        width: 0,
        opacity: 0,
        padding: 0,
        duration: 0.05,
        delay,
        stagger: 0.03,
        ease: "none",
      });
    });
  },

  // Cross fade with rotation
  letter09(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      chars.forEach((char, index) => {
        tl.from(
          char,
          {
            rotation: index % 2 ? 45 : -45,
            opacity: 0,
            duration: 0.8,
            delay: delay + index * 0.02,
            ease: "power2.out",
          },
          delay
        );
      });
    });
  },

  // Blur cascade
  letter10(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      tl.from(chars, {
        filter: "blur(10px)",
        opacity: 0,
        duration: 0.8,
        delay,
        stagger: 0.02,
        ease: "power2.out",
      });
    });
  },

  // Squeeze pop
  letter11(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      tl.from(chars, {
        scaleX: 2,
        scaleY: 0.5,
        opacity: 0,
        duration: 0.8,
        delay,
        stagger: 0.02,
        ease: "back.out(1.7)",
      });
    });
  },

  // Domino effect
  letter12(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      tl.from(chars, {
        rotationX: -90,
        opacity: 0,
        duration: 0.8,
        delay,
        stagger: 0.03,
        ease: "power2.out",
        transformOrigin: "50% 0%",
      });
    });
  },

  // Rainbow wave
  letter13(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      const colors = [
        "#ff0000",
        "#ff7f00",
        "#ffff00",
        "#00ff00",
        "#0000ff",
        "#4b0082",
        "#8f00ff",
      ];
      chars.forEach((char, index) => {
        tl.from(
          char,
          {
            color: colors[index % colors.length],
            yPercent: 50,
            opacity: 0,
            duration: 1,
            delay: delay + index * 0.03,
            ease: "power2.out",
          },
          delay
        );
      });
    });
  },

  // Perspective zoom
  letter14(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      tl.from(chars, {
        z: -1000,
        opacity: 0,
        duration: 1.2,
        delay,
        stagger: 0.02,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    });
  },

  // Spring bounce
  letter15(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      tl.from(chars, {
        scale: 3,
        opacity: 0,
        duration: 1,
        delay,
        stagger: 0.03,
        ease: "elastic.out(1, 0.3)",
      });
    });
  },

  // Swirl in
  letter16(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      chars.forEach((char, index) => {
        const angle = (index * 30) % 360;
        tl.from(
          char,
          {
            rotation: angle,
            scale: 0,
            opacity: 0,
            duration: 1,
            delay: delay + index * 0.02,
            ease: "back.out(1.7)",
          },
          delay
        );
      });
    });
  },

  // Matrix rain
  letter17(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      tl.from(chars, {
        yPercent: -200,
        opacity: 0,
        duration: 1,
        delay,
        stagger: {
          amount: 1,
          from: "random",
        },
        ease: "power2.out",
      });
    });
  },

  // Glitch reveal
  letter18(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      chars.forEach((char) => {
        tl.from(char, {
          opacity: 0,
          duration: 0.1,
          delay,
          skewX: 20,
          ease: "power1.inOut",
        })
          .to(char, {
            skewX: -20,
            duration: 0.1,
            ease: "power1.inOut",
          })
          .to(char, {
            skewX: 0,
            duration: 0.1,
            ease: "power1.out",
          });
        delay += 0.03;
      });
    });
  },

  // Magnetic attraction
  letter19(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      const centerX = target.offsetWidth / 2;
      chars.forEach((char, index) => {
        const charRect = char.getBoundingClientRect();
        const charCenterX = charRect.left + charRect.width / 2;
        const distanceFromCenter = Math.abs(centerX - charCenterX);
        tl.from(
          char,
          {
            x: distanceFromCenter,
            opacity: 0,
            duration: 1,
            delay: delay + index * 0.02,
            ease: "power2.out",
          },
          delay
        );
      });
    });
  },

  // Pulse wave
  letter20(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.CHARS, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      tl.from(chars, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        delay,
        stagger: {
          each: 0.02,
          ease: "sine.inOut",
          repeat: 1,
          yoyo: true,
        },
        ease: "power2.out",
      });
    });
  },
};

// Export all animation categories
export const textEffects = {
  line: lineAnimations,
  word: wordAnimations,
  char: letterAnimations,
};

/* Usage Examples:

// Line-based animations
textEffects.line.line01(element, 0.5);  // Simple fade in
textEffects.line.line02(element);       // Mask reveal
textEffects.line.line03(element);       // Blur fade up

// Word-based animation
textEffects.word.word01(element, 0.3);  // Blur fade up

// Character-based animations
textEffects.char.letter01(element);       // Hero header
textEffects.char.letter02(element);       // Section header
textEffects.char.letter03(element);       // Quote animation
*/
