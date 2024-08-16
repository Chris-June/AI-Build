/**
 * capitalizeWords
 * Capitalizes the first letter of each word in a string.
 *
 * Params:
 * - str: The string to be capitalized.
 *
 * Returns:
 * - The string with each word's first letter capitalized.
 */
const capitalizeWords = (str) => {
	return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export default capitalizeWords;
