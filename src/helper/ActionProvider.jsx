import { GoogleGenerativeAI } from "@google/generative-ai";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.genAi = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
    this.model = this.genAi.getGenerativeModel({ model: "gemini-1.5-flash" });
  }

  greet() {
    const message = this.createChatBotMessage("Hello! How can I assist you today?");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  async handleMessage(message) {
    try {
      const result = await this.model.generateContent(message);
      const botMessage = this.createChatBotMessage(result.response.text());

      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      console.error("Error fetching response from Google Generative AI:", error);
      const errorMessage = this.createChatBotMessage("Sorry, I couldn't process your request. Please try again.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }));
    }
  }

  // Adicione mais ações para lidar com diferentes tipos de mensagens
}

export default ActionProvider;