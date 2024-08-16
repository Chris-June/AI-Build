/**
 * storageHelper
 * Provides helper functions for working with localStorage and sessionStorage.
 *
 * Methods:
 * - getItem: Retrieves an item from storage.
 * - setItem: Saves an item to storage.
 * - removeItem: Removes an item from storage.
 * - clear: Clears all items from storage.
 */

const storageHelper = {
	getItem: (key, storageType = "localStorage") => {
		try {
			const storage =
				storageType === "sessionStorage"
					? window.sessionStorage
					: window.localStorage;
			const item = storage.getItem(key);
			return item ? JSON.parse(item) : null;
		} catch (error) {
			console.error("Error getting item from storage:", error);
			return null;
		}
	},

	setItem: (key, value, storageType = "localStorage") => {
		try {
			const storage =
				storageType === "sessionStorage"
					? window.sessionStorage
					: window.localStorage;
			storage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error("Error setting item in storage:", error);
		}
	},

	removeItem: (key, storageType = "localStorage") => {
		try {
			const storage =
				storageType === "sessionStorage"
					? window.sessionStorage
					: window.localStorage;
			storage.removeItem(key);
		} catch (error) {
			console.error("Error removing item from storage:", error);
		}
	},

	clear: (storageType = "localStorage") => {
		try {
			const storage =
				storageType === "sessionStorage"
					? window.sessionStorage
					: window.localStorage;
			storage.clear();
		} catch (error) {
			console.error("Error clearing storage:", error);
		}
	},
};

export default storageHelper;
