/**
 * deepClone
 * Creates a deep copy of an object or array.
 *
 * Params:
 * - obj: The object or array to clone.
 *
 * Returns:
 * - A deep copy of the provided object or array.
 */
const deepClone = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};

export default deepClone;
