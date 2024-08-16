import { useState, useEffect } from "react";

/**
 * useIdle Hook
 * Detects when the user is idle for a specified amount of time.
 *
 * Params:
 * - timeout: The time in milliseconds after which the user is considered idle.
 *
 * Returns:
 * - isIdle: A boolean indicating whether the user is idle.
 */
const useIdle = (timeout) => {
	const [isIdle, setIsIdle] = useState(false);

	useEffect(() => {
		let idleTimeout;

		const resetIdleTimer = () => {
			clearTimeout(idleTimeout);
			setIsIdle(false);
			idleTimeout = setTimeout(() => setIsIdle(true), timeout);
		};

		window.addEventListener("mousemove", resetIdleTimer);
		window.addEventListener("keydown", resetIdleTimer);

		idleTimeout = setTimeout(() => setIsIdle(true), timeout);

		return () => {
			clearTimeout(idleTimeout);
			window.removeEventListener("mousemove", resetIdleTimer);
			window.removeEventListener("keydown", resetIdleTimer);
		};
	}, [timeout]);

	return isIdle;
};

export default useIdle;
