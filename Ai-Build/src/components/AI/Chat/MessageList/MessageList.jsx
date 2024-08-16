import React from "react";
import PropTypes from "prop-types";
import MessageItem from "./MessageItem";

/**
 * MessageList Component
 * Displays a list of messages within the chat window.
 *
 * Props:
 * - messages: Array of message objects to display.
 */
const MessageList = ({ messages }) => {
	return (
		<div className="message-list">
			{/* Map over the array of messages and render a MessageItem for each */}
			{messages.map((message) => (
				<MessageItem
					key={message.id}
					sender={message.sender}
					text={message.text}
					isUser={message.sender === "User"} // Example condition to style user messages differently
				/>
			))}
		</div>
	);
};

// Prop types validation for learning purposes
MessageList.propTypes = {
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			sender: PropTypes.string.isRequired,
		})
	).isRequired, // Array of message objects to display
};

export default MessageList;
