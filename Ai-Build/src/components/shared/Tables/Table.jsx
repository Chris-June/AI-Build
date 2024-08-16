import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for prop validation
import "./Table.css"; // Importing the CSS file for styling

/**
 * Table Component
 * A reusable table component to display data in rows and columns.
 *
 * Props:
 * - headers: An array of strings representing the table headers. This prop is required.
 * - data: An array of objects representing the table rows. Each object should correspond to a row, with keys matching the headers.
 *
 * Usage:
 * <Table
 *   headers={["Name", "Age", "Location"]}
 *   data={[
 *     { Name: "John Doe", Age: 30, Location: "New York" },
 *     { Name: "Jane Smith", Age: 25, Location: "San Francisco" },
 *   ]}
 * />
 */

const Table = ({ headers, data }) => {
	return (
		<table className="table">
			<thead>
				<tr>
					{headers.map((header, index) => (
						<th key={index}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row, rowIndex) => (
					<tr key={rowIndex}>
						{headers.map((header, colIndex) => (
							<td key={colIndex}>{row[header]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

// Prop validation to ensure correct prop types are passed
Table.propTypes = {
	headers: PropTypes.arrayOf(PropTypes.string).isRequired, // headers is required and must be an array of strings
	data: PropTypes.arrayOf(PropTypes.object).isRequired, // data is required and must be an array of objects
};

export default Table; // Exporting the Table component for use in other parts of the app
