/**
 * generateUniqueId
 * Generates a unique identifier string.
 *
 * Returns:
 * - A unique identifier string.
 */
const generateUniqueId = () => {
	return "_" + Math.random().toString(36).substr(2, 9);
};

export default generateUniqueId;
