import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for prop validation
import "./Breadcrumb.css"; // Importing the CSS file for styling

/**
 * Breadcrumb Component
 * A reusable breadcrumb component that displays a navigation trail.
 *
 * Props:
 * - items: An array of breadcrumb items, each containing a `label` and an optional `link`.
 *
 * Usage:
 * <Breadcrumb items={[
 *   { label: "Home", link: "/" },
 *   { label: "Products", link: "/products" },
 *   { label: "Laptops", link: "/products/laptops" },
 *   { label: "Gaming Laptop" }
 * ]} />
 */

const Breadcrumb = ({ items }) => {
	return (
		<nav className="breadcrumb">
			{items.map((item, index) => (
				<span key={index} className="breadcrumb-item">
					{item.link ? (
						<a href={item.link} className="breadcrumb-link">
							{item.label}
						</a>
					) : (
						item.label
					)}
					{index < items.length - 1 && (
						<span className="breadcrumb-separator"> / </span>
					)}
				</span>
			))}
		</nav>
	);
};

// Prop validation to ensure correct prop types are passed
Breadcrumb.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired, // label is required and must be a string
			link: PropTypes.string, // link is optional and must be a string (URL)
		})
	).isRequired, // items must be an array of objects with the specified shape
};

export default Breadcrumb; // Exporting the Breadcrumb component for use in other parts of the app
