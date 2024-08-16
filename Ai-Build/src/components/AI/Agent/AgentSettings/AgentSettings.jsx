import React from "react";
import PropTypes from "prop-types";
import Form from "../../shared/Forms/Form";
import Input from "../../shared/Inputs/Input";
import Button from "../../shared/Buttons/Button";

/**
 * AgentSettings Component
 * Renders a form for updating the AI agent's settings, such as name, description, and other configurable options.
 *
 * Props:
 * - name: The current name of the AI agent.
 * - description: The current description of the AI agent.
 * - onSave: Function to handle saving the updated settings.
 */
const AgentSettings = ({ name, description, onSave }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const updatedName = e.target.name.value;
		const updatedDescription = e.target.description.value;
		onSave(updatedName, updatedDescription);
	};

	return (
		<div className="agent-settings">
			<h2>Agent Settings</h2>
			{/* Form component to handle the settings update */}
			<Form onSubmit={handleSubmit}>
				{/* Input for updating the agent's name */}
				<Input
					name="name"
					type="text"
					placeholder="Agent Name"
					defaultValue={name}
				/>

				{/* Input for updating the agent's description */}
				<Input
					name="description"
					type="text"
					placeholder="Agent Description"
					defaultValue={description}
				/>

				{/* Button to save the updated settings */}
				<Button label="Save Settings" type="submit" />
			</Form>
		</div>
	);
};

// Prop types validation for learning purposes
AgentSettings.propTypes = {
	name: PropTypes.string.isRequired, // The current name of the AI agent
	description: PropTypes.string.isRequired, // The current description of the AI agent
	onSave: PropTypes.func.isRequired, // Function to save the updated settings
};

export default AgentSettings;
