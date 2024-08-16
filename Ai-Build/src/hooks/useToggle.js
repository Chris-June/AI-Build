import { useState } from "react";

/**
 * useToggle Hook
 * Provides an easy way to toggle a boolean state.
 *
 * Params:
 * - initialState: The initial state (default: false).
 *
 * Returns:
 * - state: The current state.
 * - toggle: A function to toggle the state.
 */
const useToggle = (initialState = false) => {
	const [state, setState] = useState(initialState);

	const toggle = () => {
		setState((prevState) => !prevState);
	};

	return [state, toggle];
};

export default useToggle;
