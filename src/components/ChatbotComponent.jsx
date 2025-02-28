import React, { useEffect, useRef, useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../config/config';
import MessageParser from '../helper/MessageParser';
import ActionProvider from '../helper/ActionProvider';

const ChatbotComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const chatbotRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (chatbotRef.current) {
      observer.observe(chatbotRef.current);
    }

    return () => {
      if (chatbotRef.current) {
        observer.unobserve(chatbotRef.current);
      }
    };
  }, []);

  return (
    <div ref={chatbotRef} className="chatbot-container">
      {isVisible && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      )}
    </div>
  );
};

export default ChatbotComponent;