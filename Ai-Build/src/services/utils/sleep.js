/**
 * sleep
 * Pauses the execution of an async function for a specified duration.
 *
 * Params:
 * - ms: The time in milliseconds to pause.
 *
 * Returns:
 * - A promise that resolves after the specified duration.
 */
const sleep = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export default sleep;
