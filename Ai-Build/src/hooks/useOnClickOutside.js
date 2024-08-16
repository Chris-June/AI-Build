import { useEffect } from "react";

/**
 * useOnClickOutside Hook
 * Detects clicks outside a specified element.
 *
 * Params:
 * - ref: The ref of the element to detect clicks outside of.
 * - handler: The function to call when a click outside is detected.
 */
const useOnClickOutside = (ref, handler) => {
	useEffect(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]);
};

export default useOnClickOutside;
