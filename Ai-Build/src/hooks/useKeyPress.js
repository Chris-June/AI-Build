import { useState, useEffect } from "react";

/**
 * useKeyPress Hook
 * Tracks whether a specific key is being pressed.
 *
 * Params:
 * - targetKey: The key to track (e.g., "Escape", "Enter").
 *
 * Returns:
 * - isKeyPressed: A boolean indicating whether the target key is pressed.
 */
const useKeyPress = (targetKey) => {
	const [isKeyPressed, setIsKeyPressed] = useState(false);

	const downHandler = ({ key }) => {
		if (key === targetKey) {
			setIsKeyPressed(true);
		}
	};

	const upHandler = ({ key }) => {
		if (key === targetKey) {
			setIsKeyPressed(false);
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", downHandler);
		window.addEventListener("keyup", upHandler);

		return () => {
			window.removeEventListener("keydown", downHandler);
			window.removeEventListener("keyup", upHandler);
		};
	}, [targetKey]);

	return isKeyPressed;
};

export default useKeyPress;
