import React, { useState } from "react";
import PropTypes from "prop-types"; // Importing PropTypes for prop validation
import "./Tooltip.css"; // Importing the CSS file for styling

/**
 * Tooltip Component
 * A reusable tooltip component that displays a message when hovered over.
 *
 * Props:
 * - text: The text to display inside the tooltip. This prop is required.
 * - children: The element over which the tooltip will be displayed. This prop is required.
 *
 * Usage:
 * <Tooltip text="This is a tooltip">
 *   <button>Hover over me</button>
 * </Tooltip>
 */

const Tooltip = ({ text, children }) => {
	const [visible, setVisible] = useState(false);

	return (
		<div
			className="tooltip-container"
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}>
			{children}
			{visible && <div className="tooltip">{text}</div>}
		</div>
	);
};

// Prop validation to ensure correct prop types are passed
Tooltip.propTypes = {
	text: PropTypes.string.isRequired, // text is required and must be a string
	children: PropTypes.node.isRequired, // children is required and must be a valid React node
};

export default Tooltip; // Exporting the Tooltip component for use in other parts of the app
