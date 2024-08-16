/**
 * escapeHtml
 * Escapes HTML characters in a string to prevent XSS attacks.
 *
 * Params:
 * - str: The string to be escaped.
 *
 * Returns:
 * - The escaped string.
 */
const escapeHtml = (str) => {
	return str.replace(/[&<>"']/g, (match) => {
		const escapeMap = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#039;",
		};
		return escapeMap[match];
	});
};

export default escapeHtml;
