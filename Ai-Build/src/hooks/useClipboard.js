import { useState } from "react";

/**
 * useClipboard Hook
 * Copies text to the clipboard and provides feedback on success or failure.
 *
 * Returns:
 * - copy: A function to copy the provided text to the clipboard.
 * - success: A boolean indicating whether the text was successfully copied.
 */
const useClipboard = () => {
	const [success, setSuccess] = useState(false);

	const copy = (text) => {
		try {
			navigator.clipboard.writeText(text);
			setSuccess(true);
		} catch (error) {
			setSuccess(false);
		}
	};

	return [copy, success];
};

export default useClipboard;
