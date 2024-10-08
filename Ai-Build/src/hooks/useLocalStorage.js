import { useState } from "react";

/**
 * useLocalStorage Hook
 * Manages state synchronized with local storage.
 *
 * Params:
 * - key: The key under which the value is stored in local storage.
 * - initialValue: The initial value to use if none is found in local storage.
 *
 * Returns:
 * - storedValue: The current value stored in local storage.
 * - setValue: A function to update the value in local storage.
 */

const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.error("Error accessing localStorage:", error);
			return initialValue;
		}
	});

	const setValue = (value) => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.error("Error setting localStorage:", error);
		}
	};

	return [storedValue, setValue];
};

export default useLocalStorage;
