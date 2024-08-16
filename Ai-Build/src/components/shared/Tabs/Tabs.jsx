import React, { useState } from "react";
import PropTypes from "prop-types"; // Importing PropTypes for prop validation
import "./Tabs.css"; // Importing the CSS file for styling

/**
 * Tabs Component
 * A reusable tabs component to switch between different content panels.
 *
 * Props:
 * - tabs: An array of objects representing the tabs. Each object should have a `label` and `content`.
 *
 * Usage:
 * <Tabs
 *   tabs={[
 *     { label: "Tab 1", content: <p>Content 1</p> },
 *     { label: "Tab 2", content: <p>Content 2</p> },
 *     { label: "Tab 3", content: <p>Content 3</p> },
 *   ]}
 * />
 */

const Tabs = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className="tabs">
			<div className="tabs-header">
				{tabs.map((tab, index) => (
					<button
						key={index}
						className={`tabs-button ${index === activeTab ? "active" : ""}`}
						onClick={() => setActiveTab(index)}>
						{tab.label}
					</button>
				))}
			</div>
			<div className="tabs-content">
				{tabs[activeTab] && tabs[activeTab].content}
			</div>
		</div>
	);
};

// Prop validation to ensure correct prop types are passed
Tabs.propTypes = {
	tabs: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired, // label is required and must be a string
			content: PropTypes.node.isRequired, // content is required and must be a valid React node
		})
	).isRequired, // tabs must be an array of objects and is required
};

export default Tabs; // Exporting the Tabs component for use in other parts of the app
