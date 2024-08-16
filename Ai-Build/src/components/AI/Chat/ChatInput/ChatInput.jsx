import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * ChatInput Component
 * Renders an input field where the user can type a message, with a button to send the message.
 *
 * Props:
 * - onSendMessage: Function to handle sending the typed message.
 */
const ChatInput = ({ onSendMessage }) => {
	const [message, setMessage] = useState("");

	const handleInputChange = (e) => {
		setMessage(e.target.value);
	};

	const handleSendMessage = () => {
		if (message.trim() !== "") {
			onSendMessage(message);
			setMessage(""); // Clear the input after sending
		}
	};

	return (
		<div className="chat-input">
			{/* Input field for typing the message */}
			<input
				type="text"
				value={message}
				onChange={handleInputChange}
				placeholder="Type your message..."
				className="chat-input-field"
			/>

			{/* Button to send the message */}
			<button onClick={handleSendMessage} className="chat-input-button">
				Send
			</button>
		</div>
	);
};

// Prop types validation for learning purposes
ChatInput.propTypes = {
	onSendMessage: PropTypes.func.isRequired, // Function to send the typed message
};

export default ChatInput;
