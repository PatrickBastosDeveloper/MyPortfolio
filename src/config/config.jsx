import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "Chatbot",
  initialMessages: [createChatBotMessage(`Hi! I'm here to help you with questions about Patrick Bastos and his projects.`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
      color: "#FFFFFF", // Define a cor do texto do bot
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
    userMessageBox: {
      backgroundColor: "#4A90E2",
      color: "#FFFFFF", // Define a cor do texto do usuário
    },
    userInput: {
      backgroundColor: "#333333", // Define a cor de fundo da caixa de entrada do usuário
      color: "#FFFFFF", // Define a cor do texto da caixa de entrada do usuário
    },
  },
};

export default config;