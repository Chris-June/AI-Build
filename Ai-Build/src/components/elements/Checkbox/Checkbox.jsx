import React from "react";
import PropTypes from "prop-types";
import "./CheckboxElement.css";

/**
 * CheckboxElement Component
 * A basic checkbox element.
 *
 * Props:
 * - label: The label to display next to the checkbox.
 * - checked: Whether the checkbox is checked.
 * - onChange: Function to call when the checkbox state changes.
 *
 * Usage:
 * <CheckboxElement label="Accept terms" checked={true} onChange={(e) => console.log(e.target.checked)} />
 */

const CheckboxElement = ({ label, checked, onChange }) => {
	return (
		<div className="checkbox-element">
			<input type="checkbox" checked={checked} onChange={onChange} />
			<label>{label}</label>
		</div>
	);
};

CheckboxElement.propTypes = {
	label: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default CheckboxElement;
