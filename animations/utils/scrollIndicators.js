// Define selectors for containers that should have overflow indicators
export const OVERFLOW_CONTAINERS = {
  filters: ".filters_form",
};

/**
 * Initializes overflow indicators for all defined container types.
 * Requires HTML structure:
 * <div class="parent">
 *   <div class="[container-class]"><!-- Scrolling content --></div>
 *   <div class="overflow-indicators">
 *     <div class="overflow-indicator is-left"></div>
 *     <div class="overflow-indicator is-right"></div>
 *   </div>
 * </div>
 */
export function initOverflowIndicators() {
  // Combine all container selectors into one query
  const selectors = Object.values(OVERFLOW_CONTAINERS).join(", ");
  const containers = document.querySelectorAll(selectors);

  containers.forEach((container) => {
    const parentContainer = container.parentElement;
    if (!parentContainer) return;

    function updateIndicators() {
      // Check if container can scroll in either direction
      const hasLeftOverflow = container.scrollLeft > 0;
      const hasRightOverflow =
        container.scrollLeft < container.scrollWidth - container.clientWidth;

      // Toggle classes that control the opacity of the gradient overlays
      parentContainer.classList.toggle("has-left-overflow", hasLeftOverflow);
      parentContainer.classList.toggle("has-right-overflow", hasRightOverflow);
    }

    // Update indicators on scroll and window resize
    container.addEventListener("scroll", updateIndicators);
    window.addEventListener("resize", updateIndicators);

    // Check initial state
    updateIndicators();
  });
}
