class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    if (!message) return;

    const lowerCaseMessage = (message || "").toLowerCase();

    const keywordActions = {
      hello: () => this.actionProvider.greet(),
      hi: () => this.actionProvider.greet(),
      hey: () => this.actionProvider.greet(),
      project: () => this.actionProvider.provideProjectInfo("spending"),
      projects: () => this.actionProvider.provideProjectInfo("spending"),
      technology: () => this.actionProvider.provideTechInfo("spending"),
      tech: () => this.actionProvider.provideTechInfo(),
      personal: () => this.actionProvider.providePersonalInfo(),
      about: () => this.actionProvider.providePersonalInfo(),
      hobbie: () => this.actionProvider.providePersonalInfo("hobbies"),
      hobbies: () => this.actionProvider.providePersonalInfo("hobbies"),
      interests: () => this.actionProvider.providePersonalInfo("hobbies")
    };

    for (const [keyword, action] of Object.entries(keywordActions)) {
      if (lowerCaseMessage.includes(keyword)) {
        action();
        return;
      }
    }

    this.actionProvider.handleMessage(message);
  }
}

export default MessageParser;
