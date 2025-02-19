import { initOverflowIndicators } from "../animations/utils/scrollIndicators.js";
import { initializeAnimations } from "../animations/runAnimations.js";

function initializeMumino() {
  // Initialize features
  initializeAnimations();
  initOverflowIndicators();
}

initializeMumino();
