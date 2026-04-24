import { GoogleGenerativeAI } from "@google/generative-ai";
import { PATRICK_PROFILE, queryPatrickProfile } from "../data/patrickProfile.js";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.genAi = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
    this.model = this.genAi.getGenerativeModel({ model: "gemini-2.0-flash-lite" });
    this.lastTopic = "general";
  }

  getInitialPrompt() {
    return `You are an AI assistant created to help users with information about Patrick Bastos.

Use only the following structured profile data as your source of truth:
${JSON.stringify(PATRICK_PROFILE, null, 2)}

Rules:
- Answer flexibly and naturally in Portuguese or English depending on the user's message.
- When the user asks a follow-up like "tell me more", "fale mais", "e a carreira?", or "e a vida pessoal?", continue from the last topic discussed.
- If the answer can be derived from the profile data, do not invent details.
- If the question is vague, provide a short helpful overview and offer to elaborate on personal life, career, or projects.
- Keep responses concise, informative, and human.`;
  }

  getTopicContext() {
    if (this.lastTopic === "personal") {
      return "Focus on personal life: family, hobbies, interests, and lifestyle.";
    }

    if (this.lastTopic === "career") {
      return "Focus on career: administration background, accounting offices, HR, fiscal, accounting, payroll, auditing, and migration to tech in 2022.";
    }

    if (this.lastTopic === "projects") {
      return "Focus on projects and technical work.";
    }

    return "Provide a short general overview of Patrick Bastos.";
  }

  async handleMessage(message) {
    try {
      const fallback = queryPatrickProfile(message, this.lastTopic);

      if (fallback) {
        const botMessage = this.createChatBotMessage(fallback);
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
        return;
      }

      const prompt = `${this.getInitialPrompt()}\n\n${this.getTopicContext()}\n\nUser: ${message}\nAI:`;
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

      const fallback = queryPatrickProfile(message, this.lastTopic);

      const errorMessage = this.createChatBotMessage(
        fallback ||
          "Sorry, I couldn't process your request. Please try again."
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
    this.lastTopic = "projects";
    const messageText = queryPatrickProfile(projectName || "projects", "projects");
    const message = this.createChatBotMessage(messageText);
    this.setState((prev) => ({
      ...prev,
      messages: [...(prev.messages || []), message],
    }));
  }

  provideTechInfo(tech = "") {
    this.lastTopic = "career";
    const messageText = queryPatrickProfile(tech || "technology", "career");
    const message = this.createChatBotMessage(messageText);
    this.setState((prev) => ({
      ...prev,
      messages: [...(prev.messages || []), message],
    }));
  }

  providePersonalInfo(personal = "") {
    this.lastTopic = "personal";
    const messageText = queryPatrickProfile(personal || "personal", "personal");
    const message = this.createChatBotMessage(messageText);
    this.setState((prev) => ({
      ...prev,
      messages: [...(prev.messages || []), message],
    }));
  }
}

export default ActionProvider;
