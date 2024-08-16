import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for prop validation
import "./Input.css"; // Importing the CSS file for styling

/**
 * Input Component
 * A reusable input field component with customizable type and placeholder.
 *
 * Props:
 * - type: The type of the input field (e.g., "text", "email", "password").
 * - placeholder: Placeholder text to display when the input is empty.
 *
 * Default Props:
 * - type: Defaults to "text" if not provided.
 * - placeholder: Defaults to an empty string if not provided.
 *
 * Usage:
 * <Input type="email" placeholder="Enter your email" />
 */

const Input = ({ type, placeholder }) => {
	// Rendering an input element with dynamic class, type, and placeholder attributes
	return <input className="input" type={type} placeholder={placeholder} />;
};

// Prop validation to ensure correct prop types are passed
Input.propTypes = {
	type: PropTypes.string, // Type should be a string, e.g., "text", "password", "email"
	placeholder: PropTypes.string, // Placeholder should be a string
};

// Default props provide fallback values if no props are passed
Input.defaultProps = {
	type: "text", // Default input type is "text"
	placeholder: "", // Default placeholder is an empty string
};

export default Input; // Exporting the Input component for use in other parts of the app
