import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for prop validation
import "./Alert.css"; // Importing the CSS file for styling

/**
 * Alert Component
 * A reusable alert component that displays a message with a specific style based on the type of alert.
 *
 * Props:
 * - message: The text to display inside the alert. This prop is required.
 * - type: The type of alert, which can be "success", "error", "warning", or "info". This prop is optional.
 *
 * Default Props:
 * - type: Defaults to "info" if not provided, ensuring the alert has a default style.
 *
 * Usage:
 * <Alert message="This is a success alert!" type="success" />
 */

const Alert = ({ message, type }) => {
	// Determine the CSS class to apply based on the type of alert
	const alertClass = `alert alert-${type}`;

	// Rendering a div element with dynamic class and the message inside
	return <div className={alertClass}>{message}</div>;
};

// Prop validation to ensure correct prop types are passed
Alert.propTypes = {
	message: PropTypes.string.isRequired, // message is required and must be a string
	type: PropTypes.oneOf(["success", "error", "warning", "info"]), // type can only be one of the specified values
};

// Default props provide fallback values if no props are passed
Alert.defaultProps = {
	type: "info", // Default alert type is "info"
};

export default Alert; // Exporting the Alert component for use in other parts of the app
