import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for prop validation
import "./Register.css"; // Importing the CSS file for styling

/**
 * Register Component
 * A form component for user registration.
 *
 * Props:
 * - onSubmit: A function to be called when the registration form is submitted.
 *
 * Usage:
 * <Register onSubmit={(data) => console.log(data)} />
 */

const Register = ({ onSubmit }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = {
			name: event.target.name.value,
			email: event.target.email.value,
			password: event.target.password.value,
		};
		onSubmit(data);
	};

	return (
		<form className="register-form" onSubmit={handleSubmit}>
			<h2>Register</h2>
			<div className="form-group">
				<label>Name:</label>
				<input type="text" name="name" required />
			</div>
			<div className="form-group">
				<label>Email:</label>
				<input type="email" name="email" required />
			</div>
			<div className="form-group">
				<label>Password:</label>
				<input type="password" name="password" required />
			</div>
			<button type="submit" className="register-button">
				Register
			</button>
		</form>
	);
};

// Prop validation to ensure correct prop types are passed
Register.propTypes = {
	onSubmit: PropTypes.func.isRequired, // onSubmit is required and must be a function
};

export default Register; // Exporting the Register component for use in other parts of the app
