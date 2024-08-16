import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for prop validation
import "./Card.css"; // Importing the CSS file for styling

/**
 * Card Component
 * A reusable card component that can display content such as text, images, and actions.
 *
 * Props:
 * - title: The title of the card. This prop is optional.
 * - content: The main content of the card. This prop is required.
 * - image: The URL of the image to display at the top of the card. This prop is optional.
 * - footer: The content to display in the footer of the card, often used for actions. This prop is optional.
 *
 * Usage:
 * <Card
 *   title="Card Title"
 *   content="This is the main content of the card."
 *   image="image.jpg"
 *   footer={<button>Click Me</button>}
 * />
 */

const Card = ({ title, content, image, footer }) => {
	return (
		<div className="card">
			{image && <img src={image} alt={title} className="card-image" />}
			{title && <h3 className="card-title">{title}</h3>}
			<div className="card-content">{content}</div>
			{footer && <div className="card-footer">{footer}</div>}
		</div>
	);
};

// Prop validation to ensure correct prop types are passed
Card.propTypes = {
	title: PropTypes.string, // title is optional and must be a string
	content: PropTypes.node.isRequired, // content is required and must be a valid React node
	image: PropTypes.string, // image is optional and must be a string (URL)
	footer: PropTypes.node, // footer is optional and must be a valid React node
};

export default Card; // Exporting the Card component for use in other parts of the app
