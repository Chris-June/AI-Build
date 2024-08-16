import { useState } from "react";

/**
 * useLocalStorageWithExpiration Hook
 * Manages local storage with an expiration time for stored data.
 *
 * Params:
 * - key: The key under which the value is stored in local storage.
 * - initialValue: The initial value to use if none is found in local storage.
 * - expirationTime: The time in milliseconds after which the stored data should expire.
 *
 * Returns:
 * - storedValue: The current value stored in local storage.
 * - setValue: A function to update the value in local storage.
 */

const useLocalStorageWithExpiration = (key, initialValue, expirationTime) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			if (!item) return initialValue;
			const parsedItem = JSON.parse(item);
			const now = new Date();

			if (now.getTime() > parsedItem.expirationTime) {
				window.localStorage.removeItem(key);
				return initialValue;
			}

			return parsedItem.value;
		} catch (error) {
			console.error("Error accessing localStorage:", error);
			return initialValue;
		}
	});

	const setValue = (value) => {
		try {
			const now = new Date();
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			const item = {
				value: valueToStore,
				expirationTime: now.getTime() + expirationTime,
			};
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(item));
		} catch (error) {
			console.error("Error setting localStorage:", error);
		}
	};

	return [storedValue, setValue];
};

export default useLocalStorageWithExpiration;
