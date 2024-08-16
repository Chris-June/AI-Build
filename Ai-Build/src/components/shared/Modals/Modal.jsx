import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for prop validation
import "./Modal.css"; // Importing the CSS file for styling

/**
 * Modal Component
 * A reusable modal component that displays content in a popup window.
 *
 * Props:
 * - isOpen: A boolean that determines whether the modal is open or closed.
 * - onClose: A function to be called when the modal is closed.
 * - title: The title of the modal. This prop is optional.
 * - children: The content to be displayed inside the modal.
 *
 * Usage:
 * <Modal
 *   isOpen={isOpen}
 *   onClose={handleClose}
 *   title="Modal Title"
 * >
 *   <p>This is the modal content</p>
 * </Modal>
 */

const Modal = ({ isOpen, onClose, title, children }) => {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				{title && <h2 className="modal-title">{title}</h2>}
				<div className="modal-body">{children}</div>
				<button className="modal-close" onClick={onClose}>
					Close
				</button>
			</div>
		</div>
	);
};

// Prop validation to ensure correct prop types are passed
Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired, // isOpen is required and must be a boolean
	onClose: PropTypes.func.isRequired, // onClose is required and must be a function
	title: PropTypes.string, // title is optional and must be a string
	children: PropTypes.node.isRequired, // children is required and must be a valid React node
};

export default Modal; // Exporting the Modal component for use in other parts of the app
