import axios from 'axios';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
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
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: message,
        max_tokens: 150,
        temperature: 0.7,
      }, {
        headers: {
          'Authorization': `Bearer AIzaSyAA1vL_JMDgNKp0_rmAg0NCxQtD4Uylt_s`
        }
      });

      const result = response.data.choices[0].text.trim();
      const botMessage = this.createChatBotMessage(result);

      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      console.error("Error fetching response from OpenAI:", error);
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