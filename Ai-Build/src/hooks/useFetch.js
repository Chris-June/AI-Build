import { useState, useEffect } from "react";

/**
 * useFetch Hook
 * Fetches data from a specified API endpoint.
 *
 * Params:
 * - url: The API endpoint to fetch data from.
 *
 * Returns:
 * - data: The fetched data.
 * - loading: A boolean indicating whether the data is being loaded.
 * - error: An error object if the request fails.
 */

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const result = await response.json();
				setData(result);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { data, loading, error };
};

export default useFetch;
