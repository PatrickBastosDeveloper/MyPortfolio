import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "Chatbot",
  initialMessages: [createChatBotMessage(`Hi! I'm here to help you with questions about Patrick Bastos and his projects.`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#1F2937", // Tailwind color: bg-gray-800
      color: "#FFFFFF", // Tailwind color: text-white
    },
    chatButton: {
      backgroundColor: "#10B981", // Tailwind color: bg-green-500
    },
    userMessageBox: {
      backgroundColor: "#3B82F6", // Tailwind color: bg-blue-500
      color: "#FFFFFF", // Tailwind color: text-white
    },
    userInput: {
      backgroundColor: "#1F2937", // Tailwind color: bg-gray-800
      color: "#FFFFFF", // Tailwind color: text-white
    },
  },
};

export default config;