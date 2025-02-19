/**
 * Valid split types for text animations
 * @readonly
 * @enum {string}
 */

/**
 * Set up default SplitType options for all animations
 */
SplitType.setDefaults({
  absolute: false,
});

export const SPLIT_TYPES = {
  LINES: "lines",
  WORDS: "words",
  CHARS: "chars",
};

/**
 * Validates the requested split types against available options
 * @param {string[]} requestedTypes - Array of split types to validate
 * @returns {boolean} - True if all requested types are valid
 */
function validateSplitTypes(requestedTypes) {
  if (!Array.isArray(requestedTypes)) {
    return false;
  }

  const validTypes = Object.values(SPLIT_TYPES);
  return requestedTypes.every((type) =>
    validTypes.includes(type.toLowerCase())
  );
}

/**
 * Formats split types into the required string format for SplitType
 * @param {string[]} types - Array of split types
 * @returns {string} Comma-separated string of split types
 */
function formatSplitTypes(types) {
  return types.join(", ").toLowerCase();
}

/**
 * Splits text elements for animation using SplitType
 * @param {HTMLElement|string} element - DOM element or selector to split
 * @param {string|string[]} types - Single split type or array of types ('lines', 'words', 'chars')
 * @returns {SplitType|null} SplitType instance or null if invalid
 * @throws {Error} If element is not found or split types are invalid
 */
export function splitTextForAnimation(element, types) {
  // Validate element
  const targetElement =
    typeof element === "string" ? document.querySelector(element) : element;

  if (!targetElement) {
    throw new Error("Invalid element: Element not found in DOM");
  }

  // Normalize types to array
  const splitTypes = Array.isArray(types) ? types : [types];

  // Validate split types
  if (!validateSplitTypes(splitTypes)) {
    throw new Error(
      `Invalid split type(s). Valid options are: ${Object.values(
        SPLIT_TYPES
      ).join(", ")}`
    );
  }

  try {
    return new SplitType(targetElement, {
      types: formatSplitTypes(splitTypes),
    });
  } catch (error) {
    console.error("Error splitting text:", error);
    throw new Error(
      "Failed to split text. Check if SplitType library is properly loaded."
    );
  }
}

/* Usage Examples:
    
    // Split by single type
    splitTextForAnimation('.heading', SPLIT_TYPES.WORDS);
    
    // Split by multiple types
    splitTextForAnimation(
      document.querySelector('.heading'), 
      [SPLIT_TYPES.WORDS, SPLIT_TYPES.CHARS]
    );
    
    // The function will:
    // 1. Validate the element exists
    // 2. Validate all split types are valid
    // 3. Handle both string selectors and DOM elements
    // 4. Provide clear error messages if something goes wrong
    */
