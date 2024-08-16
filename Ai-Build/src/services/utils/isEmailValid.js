/**
 * isEmailValid
 * Validates if a string is a properly formatted email address.
 *
 * Params:
 * - email: The string to validate.
 *
 * Returns:
 * - A boolean indicating whether the email is valid.
 */
const isEmailValid = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

export default isEmailValid;
