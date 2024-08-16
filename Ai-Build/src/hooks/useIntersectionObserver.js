import { useState, useEffect } from "react";

/**
 * useIntersectionObserver Hook
 * Tracks the intersection of a target element with an ancestor element or the viewport.
 *
 * Params:
 * - ref: The ref of the target element to observe.
 * - options: Intersection observer options.
 *
 * Returns:
 * - isIntersecting: A boolean indicating whether the target element is intersecting.
 */
const useIntersectionObserver = (ref, options) => {
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setIsIntersecting(entry.isIntersecting);
		}, options);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [ref, options]);

	return isIntersecting;
};

export default useIntersectionObserver;
