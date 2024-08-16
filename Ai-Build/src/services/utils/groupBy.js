/**
 * groupBy
 * Groups an array of objects by a specified property.
 *
 * Params:
 * - array: The array of objects to group.
 * - key: The property to group by.
 *
 * Returns:
 * - An object where each key is a group and each value is an array of objects.
 */
const groupBy = (array, key) => {
	return array.reduce((result, currentValue) => {
		const group = currentValue[key];
		if (!result[group]) {
			result[group] = [];
		}
		result[group].push(currentValue);
		return result;
	}, {});
};

export default groupBy;
