import React from "react";
import PropTypes from "prop-types";

/**
 * MessageItem Component
 * Renders a single message within the chat window, including the sender's name and the message text.
 *
 * Props:
 * - sender: The name of the person who sent the message.
 * - text: The content of the message.
 * - isUser: Boolean indicating if the message is from the user (for styling purposes).
 */
const MessageItem = ({ sender, text, isUser }) => {
	return (
		<div
			className={`message-item ${isUser ? "message-user" : "message-agent"}`}>
			{/* Display the sender's name */}
			<strong className="message-sender">{sender}:</strong>

			{/* Display the message text */}
			<span className="message-text">{text}</span>
		</div>
	);
};

// Prop types validation for learning purposes
MessageItem.propTypes = {
	sender: PropTypes.string.isRequired, // The name of the message sender
	text: PropTypes.string.isRequired, // The content of the message
	isUser: PropTypes.bool.isRequired, // Boolean indicating if the message is from the user
};

export default MessageItem;
