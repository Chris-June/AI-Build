import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for prop validation
import "./Login.css"; // Importing the CSS file for styling

/**
 * Login Component
 * A form component for user login.
 *
 * Props:
 * - onSubmit: A function to be called when the login form is submitted.
 *
 * Usage:
 * <Login onSubmit={(data) => console.log(data)} />
 */

const Login = ({ onSubmit }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = {
			email: event.target.email.value,
			password: event.target.password.value,
		};
		onSubmit(data);
	};

	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<h2>Login</h2>
			<div className="form-group">
				<label>Email:</label>
				<input type="email" name="email" required />
			</div>
			<div className="form-group">
				<label>Password:</label>
				<input type="password" name="password" required />
			</div>
			<button type="submit" className="login-button">
				Login
			</button>
		</form>
	);
};

// Prop validation to ensure correct prop types are passed
Login.propTypes = {
	onSubmit: PropTypes.func.isRequired, // onSubmit is required and must be a function
};

export default Login; // Exporting the Login component for use in other parts of the app
