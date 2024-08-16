import React from "react";
import PropTypes from "prop-types";

/**
 * AgentStatus Component
 * Displays the current status of the AI agent, such as whether it is active, idle, or offline.
 *
 * Props:
 * - status: The current status of the AI agent (e.g., "active", "idle", "offline").
 */
const AgentStatus = ({ status }) => {
	return (
		<div className={`agent-status agent-status-${status}`}>
			{/* Display the status with appropriate styling based on the status prop */}
			<p>
				Agent is currently:{" "}
				<strong>{status.charAt(0).toUpperCase() + status.slice(1)}</strong>
			</p>
		</div>
	);
};

// Prop types validation for learning purposes
AgentStatus.propTypes = {
	status: PropTypes.oneOf(["active", "idle", "offline"]).isRequired, // The current status of the AI agent
};

export default AgentStatus;
