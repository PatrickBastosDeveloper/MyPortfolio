class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    if (!message) return;

    const lowerCaseMessage = (message || "").toLowerCase();

    const hasCareerIntent =
      lowerCaseMessage.includes("carreira") ||
      lowerCaseMessage.includes("trabalho") ||
      lowerCaseMessage.includes("trabalhou") ||
      lowerCaseMessage.includes("trabalha") ||
      lowerCaseMessage.includes("emprego") ||
      lowerCaseMessage.includes("profissional") ||
      lowerCaseMessage.includes("tech") ||
      lowerCaseMessage.includes("tecnologia") ||
      lowerCaseMessage.includes("c#") ||
      lowerCaseMessage.includes(".net") ||
      lowerCaseMessage.includes("react") ||
      lowerCaseMessage.includes("javascript") ||
      lowerCaseMessage.includes("api") ||
      lowerCaseMessage.includes("cloud");

    const hasProjectIntent =
      lowerCaseMessage.includes("projeto") ||
      lowerCaseMessage.includes("projetos") ||
      lowerCaseMessage.includes("project") ||
      lowerCaseMessage.includes("projects") ||
      lowerCaseMessage.includes("spending") ||
      lowerCaseMessage.includes("marketing") ||
      lowerCaseMessage.includes("black friday") ||
      lowerCaseMessage.includes("benefit");

    const hasPersonalIntent =
      lowerCaseMessage.includes("vida") ||
      lowerCaseMessage.includes("pessoal") ||
      lowerCaseMessage.includes("família") ||
      lowerCaseMessage.includes("familia") ||
      lowerCaseMessage.includes("filho") ||
      lowerCaseMessage.includes("oliver") ||
      lowerCaseMessage.includes("casado") ||
      lowerCaseMessage.includes("married") ||
      lowerCaseMessage.includes("hobby") ||
      lowerCaseMessage.includes("hobbies") ||
      lowerCaseMessage.includes("interesses") ||
      lowerCaseMessage.includes("interests") ||
      lowerCaseMessage.includes("corrida") ||
      lowerCaseMessage.includes("natação") ||
      lowerCaseMessage.includes("natação") ||
      lowerCaseMessage.includes("swimming") ||
      lowerCaseMessage.includes("running") ||
      lowerCaseMessage.includes("cooking") ||
      lowerCaseMessage.includes("coffee");

    const keywordActions = {
      hello: () => this.actionProvider.greet(),
      hi: () => this.actionProvider.greet(),
      hey: () => this.actionProvider.greet(),
    };

    for (const [keyword, action] of Object.entries(keywordActions)) {
      if (lowerCaseMessage.includes(keyword)) {
        action();
        return;
      }
    }

    if (hasCareerIntent) {
      this.actionProvider.provideTechInfo(message);
      return;
    }

    if (hasProjectIntent) {
      this.actionProvider.provideProjectInfo(message);
      return;
    }

    if (hasPersonalIntent) {
      this.actionProvider.providePersonalInfo(message);
      return;
    }

    if (lowerCaseMessage.includes("patrick") || lowerCaseMessage.includes("sobre")) {
      this.actionProvider.providePersonalInfo(message);
      return;
    }

    this.actionProvider.handleMessage(message);
  }
}

export default MessageParser;
