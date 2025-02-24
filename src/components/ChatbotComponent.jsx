import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../config/config';
import MessageParser from '../helper/MessageParser';
import ActionProvider from '../helper/ActionProvider';

const ChatbotComponent = () => {
  return (
    <div className="chatbot-container">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatbotComponent;