import axios from "axios";

/**
 * apiHelper
 * Provides helper functions for making API requests.
 *
 * Methods:
 * - get: Makes a GET request.
 * - post: Makes a POST request.
 * - put: Makes a PUT request.
 * - delete: Makes a DELETE request.
 */

const apiHelper = {
	get: async (url, config = {}) => {
		try {
			const response = await axios.get(url, config);
			return response.data;
		} catch (error) {
			throw new Error(error.response?.data?.message || "Error fetching data");
		}
	},

	post: async (url, data, config = {}) => {
		try {
			const response = await axios.post(url, data, config);
			return response.data;
		} catch (error) {
			throw new Error(error.response?.data?.message || "Error posting data");
		}
	},

	put: async (url, data, config = {}) => {
		try {
			const response = await axios.put(url, data, config);
			return response.data;
		} catch (error) {
			throw new Error(error.response?.data?.message || "Error updating data");
		}
	},

	delete: async (url, config = {}) => {
		try {
			const response = await axios.delete(url, config);
			return response.data;
		} catch (error) {
			throw new Error(error.response?.data?.message || "Error deleting data");
		}
	},
};

export default apiHelper;
