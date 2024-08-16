import { useState, useEffect } from "react";

/**
 * useOnlineStatus Hook
 * Tracks the online/offline status of the user's network connection.
 *
 * Returns:
 * - isOnline: A boolean indicating whether the user is currently online.
 */
const useOnlineStatus = () => {
	const [isOnline, setIsOnline] = useState(navigator.onLine);

	useEffect(() => {
		const handleOnline = () => setIsOnline(true);
		const handleOffline = () => setIsOnline(false);

		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);

		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, []);

	return isOnline;
};

export default useOnlineStatus;
