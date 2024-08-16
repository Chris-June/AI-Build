import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for prop validation
import "./ProgressBar.css"; // Importing the CSS file for styling

/**
 * ProgressBar Component
 * A reusable progress bar component to indicate progress.
 *
 * Props:
 * - progress: A number representing the current progress (0-100). This prop is required.
 * - label: A label to display on the progress bar. This prop is optional.
 *
 * Usage:
 * <ProgressBar progress={50} label="50%" />
 */

const ProgressBar = ({ progress, label }) => {
	return (
		<div className="progress-bar">
			<div
				className="progress-bar-fill"
				style={{ width: `${progress}%` }}></div>
			{label && <span className="progress-bar-label">{label}</span>}
		</div>
	);
};

// Prop validation to ensure correct prop types are passed
ProgressBar.propTypes = {
	progress: PropTypes.number.isRequired, // progress is required and must be a number between 0 and 100
	label: PropTypes.string, // label is optional and must be a string
};

export default ProgressBar; // Exporting the ProgressBar component for use in other parts of the app
