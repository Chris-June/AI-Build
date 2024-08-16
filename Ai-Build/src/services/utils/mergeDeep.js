/**
 * mergeDeep
 * Recursively merges two or more objects, combining properties and sub-properties.
 *
 * Params:
 * - target: The target object to merge into.
 * - sources: The source objects to merge from.
 *
 * Returns:
 * - The merged object.
 */
const mergeDeep = (target, ...sources) => {
	if (!sources.length) return target;
	const source = sources.shift();

	if (typeof target === "object" && typeof source === "object") {
		for (const key in source) {
			if (typeof source[key] === "object") {
				if (!target[key]) Object.assign(target, { [key]: {} });
				mergeDeep(target[key], source[key]);
			} else {
				Object.assign(target, { [key]: source[key] });
			}
		}
	}

	return mergeDeep(target, ...sources);
};

export default mergeDeep;
