import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for prop validation
import "./Form.css"; // Importing the CSS file for styling

/**
 * Form Component
 * A reusable form component that serves as a container for form elements.
 *
 * Props:
 * - children: The content to be rendered inside the form. This prop is required.
 *
 * Usage:
 * <Form>
 *   <Input placeholder="Enter your name" />
 *   <Button label="Submit" />
 * </Form>
 */

const Form = ({ children }) => {
	// Rendering a form element with dynamic class that wraps around its children components
	return <form className="form">{children}</form>;
};

// Prop validation to ensure correct prop types are passed
Form.propTypes = {
	children: PropTypes.node.isRequired, // children is required and must be a valid React node
};

export default Form; // Exporting the Form component for use in other parts of the app
