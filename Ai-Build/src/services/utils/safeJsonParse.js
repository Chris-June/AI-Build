/**
 * safeJsonParse
 * Safely parses a JSON string, returning a fallback value if parsing fails.
 *
 * Params:
 * - jsonString: The JSON string to parse.
 * - fallback: The value to return if parsing fails (default: null).
 *
 * Returns:
 * - The parsed object or the fallback value.
 */
const safeJsonParse = (jsonString, fallback = null) => {
	try {
		return JSON.parse(jsonString);
	} catch (error) {
		return fallback;
	}
};

export default safeJsonParse;
