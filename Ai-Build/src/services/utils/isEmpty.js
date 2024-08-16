/**
 * isEmpty
 * Checks if an object, array, or string is empty.
 *
 * Params:
 * - value: The value to check.
 *
 * Returns:
 * - A boolean indicating whether the value is empty.
 */
const isEmpty = (value) => {
	if (value == null) return true;
	if (Array.isArray(value) || typeof value === "string")
		return value.length === 0;
	if (typeof value === "object") return Object.keys(value).length === 0;
	return false;
};

export default isEmpty;
