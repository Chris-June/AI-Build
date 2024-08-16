import React from "react";
import PropTypes from "prop-types";
import Button from "../../shared/Buttons/Button";

/**
 * AgentControls Component
 * Provides controls for managing the AI agent, such as starting, stopping, and resetting the agent.
 *
 * Props:
 * - onStart: Function to handle the start action.
 * - onStop: Function to handle the stop action.
 * - onReset: Function to handle the reset action.
 *
 * Example usage:
 * <AgentControls onStart={handleStart} onStop={handleStop} onReset={handleReset} />
 */
const AgentControls = ({ onStart, onStop, onReset }) => {
	return (
		<div className="agent-controls">
			{/* Start Button */}
			<Button label="Start Agent" onClick={onStart} />

			{/* Stop Button */}
			<Button label="Stop Agent" onClick={onStop} />

			{/* Reset Button */}
			<Button label="Reset Agent" onClick={onReset} />
		</div>
	);
};

// Prop types validation for learning purposes
AgentControls.propTypes = {
	onStart: PropTypes.func.isRequired, // Function to start the agent
	onStop: PropTypes.func.isRequired, // Function to stop the agent
	onReset: PropTypes.func.isRequired, // Function to reset the agent
};

export default AgentControls;
