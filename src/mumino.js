import { initOverflowIndicators } from "../animations/utils/scrollIndicators.js";
import { initBatchAnimations } from "../animations/global/batch.js";
import { initializeTextAnimations } from "../animations/global/text.js";

function initializeMumino() {
  // Initialize features
  initOverflowIndicators();
  initBatchAnimations();
  initializeTextAnimations();
}

initializeMumino();
