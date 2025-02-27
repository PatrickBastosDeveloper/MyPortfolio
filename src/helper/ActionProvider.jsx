import { GoogleGenerativeAI } from "@google/generative-ai";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.genAi = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
    this.model = this.genAi.getGenerativeModel({ model: "gemini-1.5-flash" });
  }

  greet() {
    const message = this.createChatBotMessage("Hello! How can I assist you today? Suggestions: You can ask what are the main projects created by Patrick, main technologies used, etc. I also know some personal facts about him.");
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
      const errorMessage = this.createChatBotMessage("Sorry, I couldn't process your request. Apparently I'm having some connection problem with the artificial interaction API. You can try again, if it doesn't work you can send a message to Patrick signaling that something is wrong. I'm sure he will solve it!😉");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }));
    }
  }
}

export default ActionProvider;