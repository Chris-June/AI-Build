import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for prop validation
import "./SignIn.css"; // Importing the CSS file for styling

/**
 * SignIn Component
 * A form component for user sign-in.
 *
 * Props:
 * - onSubmit: A function to be called when the sign-in form is submitted.
 *
 * Usage:
 * <SignIn onSubmit={(data) => console.log(data)} />
 */

const SignIn = ({ onSubmit }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = {
			username: event.target.username.value,
			password: event.target.password.value,
		};
		onSubmit(data);
	};

	return (
		<form className="signin-form" onSubmit={handleSubmit}>
			<h2>Sign In</h2>
			<div className="form-group">
				<label>Username:</label>
				<input type="text" name="username" required />
			</div>
			<div className="form-group">
				<label>Password:</label>
				<input type="password" name="password" required />
			</div>
			<button type="submit" className="signin-button">
				Sign In
			</button>
		</form>
	);
};

// Prop validation to ensure correct prop types are passed
SignIn.propTypes = {
	onSubmit: PropTypes.func.isRequired, // onSubmit is required and must be a function
};

export default SignIn; // Exporting the SignIn component for use in other parts of the app
