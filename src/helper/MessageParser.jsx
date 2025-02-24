class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    } else {
      this.actionProvider.handleMessage(message);
    }

    // Adicione mais condições para lidar com diferentes tipos de mensagens
  }
}

export default MessageParser;