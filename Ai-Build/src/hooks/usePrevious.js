import { useRef, useEffect } from "react";

/**
 * usePrevious Hook
 * Captures the previous value of a state or prop.
 *
 * Params:
 * - value: The value to track.
 *
 * Returns:
 * - previousValue: The previous value of the tracked state or prop.
 */
const usePrevious = (value) => {
	const ref = useRef();

	useEffect(() => {
		ref.current = value;
	}, [value]);

	return ref.current;
};

export default usePrevious;
