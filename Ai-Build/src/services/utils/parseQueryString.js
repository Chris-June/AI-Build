/**
 * parseQueryString
 * Parses a URL query string into an object.
 *
 * Params:
 * - queryString: The query string to parse.
 *
 * Returns:
 * - An object containing the parsed key-value pairs.
 */
const parseQueryString = (queryString) => {
	if (!queryString) {
		return {};
	}

	return queryString
		.substring(1) // Remove the leading "?" character
		.split("&") // Split by "&" to separate each key-value pair
		.reduce((acc, param) => {
			const [key, value] = param.split("="); // Split each pair by "="
			acc[decodeURIComponent(key)] = decodeURIComponent(value || "");
			return acc;
		}, {});
};

export default parseQueryString;

