import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for prop validation
import "./Avatar.css"; // Importing the CSS file for styling

/**
 * Avatar Component
 * A reusable avatar component that displays a user's profile image or a placeholder.
 *
 * Props:
 * - src: The URL of the image to display. This prop is required.
 * - alt: Alternative text for the image, used for accessibility. This prop is required.
 * - size: The size of the avatar, which can be "small", "medium", or "large". This prop is optional.
 *
 * Default Props:
 * - size: Defaults to "medium" if not provided, ensuring a standard size.
 *
 * Usage:
 * <Avatar src="profile.jpg" alt="User Profile" size="large" />
 */

const Avatar = ({ src, alt, size }) => {
	// Determine the CSS class to apply based on the size of the avatar
	const avatarClass = `avatar avatar-${size}`;

	// Rendering an img element with dynamic class, src, and alt attributes
	return <img className={avatarClass} src={src} alt={alt} />;
};

// Prop validation to ensure correct prop types are passed
Avatar.propTypes = {
	src: PropTypes.string.isRequired, // src is required and must be a string (URL of the image)
	alt: PropTypes.string.isRequired, // alt is required and must be a string (alternative text for the image)
	size: PropTypes.oneOf(["small", "medium", "large"]), // size can only be one of the specified values
};

// Default props provide fallback values if no props are passed
Avatar.defaultProps = {
	size: "medium", // Default avatar size is "medium"
};

export default Avatar; // Exporting the Avatar component for use in other parts of the app
