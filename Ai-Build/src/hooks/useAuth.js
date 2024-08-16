import { useState, useEffect } from "react";

// Example authService for handling API requests related to authentication
import authService from "../services/authService";

/**
 * useAuth Hook
 * Manages user authentication state and provides methods for login and logout.
 *
 * Returns:
 * - user: The authenticated user object (null if not authenticated).
 * - login: A function to log in the user.
 * - logout: A function to log out the user.
 * - isAuthenticated: A boolean indicating whether the user is authenticated.
 */

const useAuth = () => {
	const [user, setUser] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const storedUser = authService.getUserFromLocalStorage();
		if (storedUser) {
			setUser(storedUser);
			setIsAuthenticated(true);
		}
	}, []);

	const login = async (credentials) => {
		try {
			const loggedInUser = await authService.login(credentials);
			setUser(loggedInUser);
			setIsAuthenticated(true);
			authService.saveUserToLocalStorage(loggedInUser);
		} catch (error) {
			console.error("Failed to log in:", error);
			setIsAuthenticated(false);
		}
	};

	const logout = () => {
		setUser(null);
		setIsAuthenticated(false);
		authService.removeUserFromLocalStorage();
	};

	return {
		user,
		isAuthenticated,
		login,
		logout,
	};
};

export default useAuth;
