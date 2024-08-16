import { useState, useEffect } from "react";

/**
 * useThrottle Hook
 * Ensures that a function is only called at most once in a specified time period.
 *
 * Params:
 * - value: The value to throttle.
 * - delay: The time delay in milliseconds.
 *
 * Returns:
 * - throttledValue: The throttled value.
 */
const useThrottle = (value, delay) => {
	const [throttledValue, setThrottledValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setThrottledValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return throttledValue;
};

export default useThrottle;
