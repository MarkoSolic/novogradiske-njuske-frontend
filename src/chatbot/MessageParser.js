class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    if (lowercase.includes("pozdrav")) {
      this.actionProvider.pozdrav();
    } else if (lowercase.includes("doviđenja")) {
      this.actionProvider.dovidjenja();
    } else if (lowercase.includes("o udruzi") || lowercase.includes("udruga")) {
      this.actionProvider.onama();
    } else if (
      lowercase.includes("pomoc") ||
      lowercase.includes("pomoć") ||
      lowercase.includes("pomoć udruzi")
    ) {
      this.actionProvider.pomoc();
    } else if (
      lowercase.includes("gdje se nalazite") ||
      lowercase.includes("mjesto")
    ) {
      this.actionProvider.mjesto();
    } else if (
      lowercase.includes("udomljavanje") ||
      lowercase.includes("udomljavanje životinja") ||
      lowercase.includes("udomljavanje zivotinja")
    ) {
      this.actionProvider.udomljavanje();
    } else {
      this.actionProvider.neispravno();
    }
  }
}

export default MessageParser;
