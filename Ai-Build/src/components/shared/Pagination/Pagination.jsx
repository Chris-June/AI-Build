import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for prop validation
import "./Pagination.css"; // Importing the CSS file for styling

/**
 * Pagination Component
 * A reusable pagination component for navigating through pages of content.
 *
 * Props:
 * - currentPage: The current active page. This prop is required.
 * - totalPages: The total number of pages. This prop is required.
 * - onPageChange: A function to be called when a page is clicked. This prop is required.
 *
 * Usage:
 * <Pagination
 *   currentPage={1}
 *   totalPages={10}
 *   onPageChange={(page) => console.log(`Page: ${page}`)}
 * />
 */

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const handleClick = (page) => {
		if (page !== currentPage) {
			onPageChange(page);
		}
	};

	const renderPageNumbers = () => {
		const pages = [];
		for (let i = 1; i <= totalPages; i++) {
			pages.push(
				<span
					key={i}
					className={`pagination-item ${i === currentPage ? "active" : ""}`}
					onClick={() => handleClick(i)}>
					{i}
				</span>
			);
		}
		return pages;
	};

	return (
		<div className="pagination">
			<span
				className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
				onClick={() => handleClick(currentPage - 1)}>
				&laquo;
			</span>
			{renderPageNumbers()}
			<span
				className={`pagination-item ${
					currentPage === totalPages ? "disabled" : ""
				}`}
				onClick={() => handleClick(currentPage + 1)}>
				&raquo;
			</span>
		</div>
	);
};

// Prop validation to ensure correct prop types are passed
Pagination.propTypes = {
	currentPage: PropTypes.number.isRequired, // currentPage is required and must be a number
	totalPages: PropTypes.number.isRequired, // totalPages is required and must be a number
	onPageChange: PropTypes.func.isRequired, // onPageChange is required and must be a function
};

export default Pagination; // Exporting the Pagination component for use in other parts of the app
