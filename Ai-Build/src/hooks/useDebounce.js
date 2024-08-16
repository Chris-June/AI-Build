import { useState, useEffect } from "react";

/**
 * useDebounce Hook
 * Delays the execution of a function until after a specified time has passed since the last call.
 *
 * Params:
 * - value: The value to debounce.
 * - delay: The delay time in milliseconds.
 *
 * Returns:
 * - debouncedValue: The debounced value.
 */
const useDebounce = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
};

export default useDebounce;
