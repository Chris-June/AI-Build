import { useState, useEffect } from "react";

/**
 * useWindowSize Hook
 * Tracks the size of the browser window and provides the current width and height.
 *
 * Returns:
 * - width: The current width of the window.
 * - height: The current height of the window.
 */
const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return windowSize;
};

export default useWindowSize;
