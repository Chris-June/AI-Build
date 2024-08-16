/**
 * debounce
 * Delays the execution of a function until after a specified period has passed since the last invocation.
 *
 * Params:
 * - func: The function to debounce.
 * - wait: The number of milliseconds to delay.
 *
 * Returns:
 * - A debounced version of the provided function.
 */
const debounce = (func, wait) => {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(this, args), wait);
	};
};

export default debounce;
