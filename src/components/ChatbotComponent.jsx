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
    <div ref={chatbotRef} className="chatbot-container flex justify-center px-4 py-16">
      {isVisible && (
        <div className="w-full max-w-3xl rounded-3xl border border-white/20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-4 shadow-2xl shadow-blue-500/20 backdrop-blur-md">
          <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-blue-300">Assistant</p>
              <h2 className="text-xl font-semibold text-white">Conversation with Chatbot</h2>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg shadow-blue-500/30">
              ✦
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-2">
            <div className="chatbot-expand">
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
