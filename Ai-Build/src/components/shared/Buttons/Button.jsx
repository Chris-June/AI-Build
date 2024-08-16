import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for prop validation
import "./Button.css"; // Importing the CSS file for styling

/**
 * Button Component
 * A reusable button component that displays a label and triggers an action when clicked.
 *
 * Props:
 * - label: The text to display inside the button. This prop is required.
 * - onClick: A function to be called when the button is clicked. This prop is optional.
 *
 * Default Props:
 * - onClick: Defaults to an empty function if not provided, meaning the button does nothing on click.
 *
 * Usage:
 * <Button label="Submit" onClick={handleSubmit} />
 */

const Button = ({ label, onClick }) => {
	// Rendering a button element with dynamic class and click event handler
	return (
		<button className="button" onClick={onClick}>
			{label}
		</button>
	);
};

// Prop validation to ensure correct prop types are passed
Button.propTypes = {
	label: PropTypes.string.isRequired, // label is required and must be a string
	onClick: PropTypes.func, // onClick is optional and must be a function if provided
};

// Default props provide fallback values if no props are passed
Button.defaultProps = {
	onClick: () => {}, // Default onClick does nothing if not provided
};

export default Button; // Exporting the Button component for use in other parts of the app
