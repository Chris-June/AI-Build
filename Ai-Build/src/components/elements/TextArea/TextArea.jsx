import React from "react";
import PropTypes from "prop-types";
import "./TextAreaElement.css";

/**
 * TextAreaElement Component
 * A basic textarea element for multi-line text input.
 *
 * Props:
 * - placeholder: Placeholder text for the textarea.
 * - value: The current value of the textarea.
 * - onChange: Function to call when the value changes.
 *
 * Usage:
 * <TextAreaElement placeholder="Enter your message" value={value} onChange={(e) => setValue(e.target.value)} />
 */

const TextAreaElement = ({ placeholder, value, onChange }) => {
	return (
		<textarea
			className="textarea-element"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

TextAreaElement.propTypes = {
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

TextAreaElement.defaultProps = {
	placeholder: "",
};

export default TextAreaElement;
