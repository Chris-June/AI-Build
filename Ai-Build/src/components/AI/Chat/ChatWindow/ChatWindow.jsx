import React from "react";
import PropTypes from "prop-types";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

/**
 * ChatWindow Component
 * The main chat window component that displays the list of messages and provides an input field to send new messages.
 *
 * Props:
 * - messages: Array of message objects to display.
 * - onSendMessage: Function to handle sending a new message.
 */
const ChatWindow = ({ messages, onSendMessage }) => {
	return (
		<div className="chat-window">
			{/* Display the list of messages */}
			<MessageList messages={messages} />

			{/* Input field to type and send a new message */}
			<ChatInput onSendMessage={onSendMessage} />
		</div>
	);
};

// Prop types validation for learning purposes
ChatWindow.propTypes = {
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			sender: PropTypes.string.isRequired,
		})
	).isRequired, // Array of message objects to display
	onSendMessage: PropTypes.func.isRequired, // Function to send a new message
};

export default ChatWindow;
