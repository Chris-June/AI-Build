/**
 * buildQueryString
 * Converts an object into a URL query string.
 *
 * Params:
 * - params: The object containing key-value pairs to be converted.
 *
 * Returns:
 * - A query string to be appended to a URL.
 */
const buildQueryString = (params) => {
	return Object.keys(params)
		.map(
			(key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
		)
		.join("&");
};

export default buildQueryString;
