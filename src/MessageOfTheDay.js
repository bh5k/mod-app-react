import React, { useState } from 'react';

const MessageOfTheDay = () => {
  // State to manage the current message
  const [currentMessage, setCurrentMessage] = useState('Hello, have a great day!');
  
  // Function to handle the button click and switch messages
  const handleButtonClick = () => {
    // Toggle between two messages
    setCurrentMessage((prevMessage) =>
      prevMessage === 'Hello, have a great day!'
        ? 'Welcome, hope you enjoy your time!'
        : 'Hello, have a great day!'
    );
  };

  return (
    <div>
      <h1>Message of the Day</h1>
      <p>{currentMessage}</p>
      <button onClick={handleButtonClick}>Switch Message</button>
    </div>
  );
};

export default MessageOfTheDay;
