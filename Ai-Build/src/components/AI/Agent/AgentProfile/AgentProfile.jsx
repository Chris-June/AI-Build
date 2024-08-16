import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../shared/Avatars/Avatar";

/**
 * AgentProfile Component
 * Displays the AI agent's profile information, including the avatar, name, and a brief description.
 *
 * Props:
 * - name: The name of the AI agent.
 * - description: A brief description of the AI agent's role or capabilities.
 * - avatarUrl: URL of the agent's avatar image.
 *
 * Example usage:
 * <AgentProfile name="AI Agent" description="Your personal AI assistant" avatarUrl="https://example.com/avatar.png" />
 */
const AgentProfile = ({ name, description, avatarUrl }) => {
	return (
		<div className="agent-profile">
			{/* Avatar component for displaying the agent's image */}
			<Avatar src={avatarUrl} alt={`${name} avatar`} size="large" />

			{/* Name of the AI agent */}
			<h2 className="agent-name">{name}</h2>

			{/* Description of the AI agent's role or capabilities */}
			<p className="agent-description">{description}</p>
		</div>
	);
};

// Prop types validation for learning purposes
AgentProfile.propTypes = {
	name: PropTypes.string.isRequired, // The name of the AI agent
	description: PropTypes.string.isRequired, // A brief description of the AI agent
	avatarUrl: PropTypes.string.isRequired, // URL of the agent's avatar image
};

export default AgentProfile;
