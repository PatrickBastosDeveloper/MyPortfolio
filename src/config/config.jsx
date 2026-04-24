import { createChatBotMessage } from 'react-chatbot-kit';
import CustomAvatar from '../components/CustomAvatar';

const config = {
  botName: 'Chatbot',
  initialMessages: [
    createChatBotMessage(
      `Hi, I'm an AI Chatbot Assistant! I'm here to help you with questions about Patrick Bastos, his personal life, and his professional background.`
    ),
  ],
  customComponents: {
    botAvatar: (props) => <CustomAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#1F2933',
      color: '#FFFFFF',
      maxWidth: '80%',
    },
    chatButton: {
      backgroundColor: '#10B981',
    },
    userMessageBox: {
      backgroundColor: '#3B82F6',
      color: '#FFFFFF',
      maxWidth: '80%',
    },
    userInput: {
      backgroundColor: '#1F2937',
      color: '#FFFFFF',
    },
  },
};

export default config;
