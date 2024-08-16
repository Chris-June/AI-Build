import { useState, useEffect } from "react";
import axios from "axios";

/**
 * useAxios Hook
 * Makes HTTP requests using Axios and manages loading, data, and error states.
 *
 * Params:
 * - config: Axios request configuration object.
 *
 * Returns:
 * - data: The response data from the API.
 * - loading: A boolean indicating whether the request is in progress.
 * - error: An error object if the request fails.
 */
const useAxios = (config) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const source = axios.CancelToken.source();

		const fetchData = async () => {
			try {
				const response = await axios({ ...config, cancelToken: source.token });
				setData(response.data);
			} catch (err) {
				if (axios.isCancel(err)) {
					console.log("Request canceled", err.message);
				} else {
					setError(err);
				}
			} finally {
				setLoading(false);
			}
		};

		fetchData();

		return () => {
			source.cancel("Operation canceled by the user.");
		};
	}, [config]);

	return { data, loading, error };
};

export default useAxios;
