import React, { useState } from "react";
import PropTypes from "prop-types"; // Importing PropTypes for prop validation
import "./Dropdown.css"; // Importing the CSS file for styling

/**
 * Dropdown Component
 * A reusable dropdown component that displays a list of options and allows the user to select one.
 *
 * Props:
 * - label: The label for the dropdown. This prop is optional.
 * - options: An array of options to display in the dropdown. Each option should be a string or an object with `label` and `value`.
 * - onSelect: A function to be called when an option is selected. This prop is optional.
 *
 * Usage:
 * <Dropdown
 *   label="Select an option"
 *   options={["Option 1", "Option 2", "Option 3"]}
 *   onSelect={(value) => console.log(value)}
 * />
 */

const Dropdown = ({ label, options, onSelect }) => {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleSelect = (option) => {
		setSelectedOption(option);
		if (onSelect) {
			onSelect(option);
		}
	};

	return (
		<div className="dropdown">
			{label && <label className="dropdown-label">{label}</label>}
			<div className="dropdown-menu">
				{options.map((option, index) => (
					<div
						key={index}
						className={`dropdown-item ${
							selectedOption === option ? "selected" : ""
						}`}
						onClick={() => handleSelect(option)}>
						{typeof option === "object" ? option.label : option}
					</div>
				))}
			</div>
		</div>
	);
};

// Prop validation to ensure correct prop types are passed
Dropdown.propTypes = {
	label: PropTypes.string, // label is optional and must be a string
	options: PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.string, // option can be a string
			PropTypes.shape({
				label: PropTypes.string.isRequired, // or an object with a label
				value: PropTypes.any.isRequired, // and a value
			}),
		])
	).isRequired, // options must be an array of strings or objects and is required
	onSelect: PropTypes.func, // onSelect is optional and must be a function if provided
};

// Default props can be added if needed
Dropdown.defaultProps = {
	onSelect: null,
};

export default Dropdown; // Exporting the Dropdown component for use in other parts of the app
