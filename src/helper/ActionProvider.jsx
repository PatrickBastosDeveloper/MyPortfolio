import { GoogleGenerativeAI } from "@google/generative-ai";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.genAi = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
    this.model = this.genAi.getGenerativeModel({ model: "gemini-1.5-flash" });
  }

  getInitialPrompt() {
    return `You are an AI assistant created to help users with information about Patrick Bastos and his projects.
  
            Patrick Bastos is a skilled software developer with experience in C#, .NET, and JavaScript. \
            He has worked on several projects, including a spending solution for VIP lounges, marketing campaigns, and a benefit center.
            
            Your main goal is to provide accurate and helpful information about Patrick's work, technologies he uses, and his achievements.
            
            If you don't know the answer to a question, it's okay to say that you don't know. Avoid making assumptions or providing personal opinions.
            
            Always ensure your responses are polite, concise, informative and a little relaxed.`;
  }

  async handleMessage(message) {
    try {
      const prompt = `${this.getInitialPrompt()}\n\nUser: ${message}\nAI:`;
  
      const result = await this.model.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      });
  
      const botResponse =
        result?.response?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I'm not sure how to respond to that.";
  
      const botMessage = this.createChatBotMessage(botResponse);
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      console.error("Error fetching response from Google Generative AI:", error);
  
      const errorMessage = this.createChatBotMessage(
        "Sorry, I couldn't process your request. \
         Apparently I'm having some connection problem with the artificial interaction API. \
         You can try again, if it doesn't work you can send a message to Patrick signaling that something is wrong. \
         I'm sure he will solve it!😉"
      );
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }));
    }
  }

  greet(name = "there") {
    const message = this.createChatBotMessage(`Hello, ${name}! How can I assist you today?`);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  provideProjectInfo(projectName = "") {
    let messageText = "Patrick has worked on several projects including a spending solution for VIP lounges, marketing campaigns, and a benefit center.";

    if (projectName.toLowerCase().includes("spending")) {
      messageText = "Patrick developed a spending solution for VIP lounges, saving R$ 24MM and reducing incidents by 60%.";
    } else if (projectName.toLowerCase().includes("black friday")) {
      messageText = "Patrick developed 14 Black Friday campaigns, optimizing customer engagement.";
    }

    const message = this.createChatBotMessage(messageText);
    this.setState((prev) => ({
      ...prev,
      messages: [...(prev.messages || []), message],
    }));
  }

  provideTechInfo(tech = "") {
    let messageText = "Patrick is proficient in C#, .NET, React, JavaScript, and cloud solutions.";

    if (tech.toLowerCase().includes("c#") || tech.toLowerCase().includes(".net")) {
      messageText = "Patrick has expertise in C# and .NET, including backend development and API integrations.";
    } else if (tech.toLowerCase().includes("react")) {
      messageText = "Patrick is skilled in React, developing user-friendly and high-performance applications.";
    }

    const message = this.createChatBotMessage(messageText);
    this.setState((prev) => ({
      ...prev,
      messages: [...(prev.messages || []), message],
    }));
  }

  providePersonalInfo(personal = "") {
    let messageText = "Patrick is married, 39 years old in 2025, and is the father of a beautiful boy named Oliver. \
    He likes to practice physical activities such as running and swimming. Loves (really loves!!) special coffees.";

    if (personal.toLowerCase().includes("what he like") || personal.toLowerCase().includes("to do")) {
      messageText = "He likes to practice physical activities such as running and swimming. Loves (really loves!!) special coffees.";
    } else if (personal.toLowerCase().includes("hobbies") || personal.toLowerCase().includes("interests")) {
      messageText = "He likes to practice physical activities such as running and swimming.";
    }

    const message = this.createChatBotMessage(messageText);
    this.setState((prev) => ({
      ...prev,
      messages: [...(prev.messages || []), message],
    }));
  }
}

export default ActionProvider;
