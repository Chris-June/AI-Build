/**
 * flattenArray
 * Flattens a multi-dimensional array into a single-dimensional array.
 *
 * Params:
 * - arr: The multi-dimensional array to flatten.
 *
 * Returns:
 * - A single-dimensional array.
 */
const flattenArray = (arr) => {
	return arr.reduce((flat, toFlatten) => {
		return flat.concat(
			Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten
		);
	}, []);
};

export default flattenArray;
