/**
 * throttle
 * Ensures a function is called at most once during a specified time interval.
 *
 * Params:
 * - func: The function to throttle.
 * - limit: The time interval in milliseconds.
 *
 * Returns:
 * - A throttled version of the provided function.
 */
const throttle = (func, limit) => {
	let inThrottle;
	return function (...args) {
		if (!inThrottle) {
			func.apply(this, args);
			inThrottle = true;
			setTimeout(() => {
				inThrottle = false;
			}, limit);
		}
	};
};

export default throttle;
