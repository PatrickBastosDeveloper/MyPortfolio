import { createChatBotMessage } from 'react-chatbot-kit';
import CustomAvatar from '../components/CustomAvatar';

const config = {
  botName: "Chatbot",
  initialMessages: [createChatBotMessage(`Hi, I'm an AI Chatbot Assistant! I'm here to help you with questions about Patrick Bastos and his projects.`)],
  customComponents: {
    botAvatar: (props) => <CustomAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#1F2933", // Tailwind color: bg-gray-800
      color: "#FFFFFF", // Tailwind color: text-white
      maxWidth: "80%", // Aumenta a largura máxima da caixa de mensagens do bot
    },
    chatButton: {
      backgroundColor: "#10B981", // Tailwind color: bg-green-500
    },
    userMessageBox: {
      backgroundColor: "#3B82F6", // Tailwind color: bg-blue-500
      color: "#FFFFFF", // Tailwind color: text-white
      maxWidth: "80%", // Aumenta a largura máxima da caixa de mensagens do usuário
    },
    userInput: {
      backgroundColor: "#1F2937", // Tailwind color: bg-gray-800
      color: "#FFFFFF", // Tailwind color: text-white
    },
  },
};

export default config;