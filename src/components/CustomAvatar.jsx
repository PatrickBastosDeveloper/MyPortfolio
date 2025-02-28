import React from 'react';
import AvatarImage from '../assets/avatar-chatbot.png'; // Substitua pelo caminho da sua imagem

const CustomAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <img src={AvatarImage} alt="Chatbot Avatar" className="w-16 h-16 rounded-full" />
    </div>
  );
};

export default CustomAvatar;