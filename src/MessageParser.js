class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    if (
      message.toLowerCase() === "talk".toLowerCase() ||
      message.toLowerCase() === "speak".toLowerCase() ||
      message.toLowerCase() === "real person".toLowerCase() ||
      message.toLowerCase() === "person".toLowerCase() ||
      message.toLowerCase() === "contact".toLowerCase() 
    ) {
      return this.actionProvider.handleLiveHelpMessages();
    }
    if (
      message.toLowerCase() === "Bye".toLowerCase() ||
      message.toLowerCase() === "Talk to you later".toLowerCase() ||
      message.toLowerCase() === "See you later".toLowerCase() 
    ) {
      return  this.actionProvider.bye();
    }
    if (
      message.toLowerCase() === "thanks".toLowerCase() ||
      message.toLowerCase() === "thank you".toLowerCase() ||
      message.toLowerCase() === "appreciate it".toLowerCase() 
    ) {
      return  this.actionProvider.thankYou();
    }
    if (
      message.toLowerCase() === "options".toLowerCase() ||
      message.toLowerCase() === "help".toLowerCase() ||
      message.toLowerCase() === "do for me".toLowerCase() ||
      message.toLowerCase() === "hi".toLowerCase() ||
      message.toLowerCase() === "hello".toLowerCase() ||
      message.toLowerCase() === "how are you".toLowerCase() ||
      message.toLowerCase() === "Whats up".toLowerCase() ||
      message.toLowerCase() === "Hey".toLowerCase() ||
      message.toLowerCase() === "".toLowerCase() ||
      message.toLowerCase() === "Howdy".toLowerCase() 
    ) {
      return this.actionProvider.handleOptions({ withAvatar: true });
    }

    if (
      message.toLowerCase() === "Billing".toLowerCase() ||
      message.toLowerCase() === "Payments".toLowerCase() ||
      message.toLowerCase() === "Account Balance".toLowerCase() ||
      message.toLowerCase() === "Balance".toLowerCase() ||
      message.toLowerCase() === "Fees".toLowerCase()
    ) {
      return this.actionProvider.handleBillingOptions({withAvatar: true});
    }

    if (
      message.toLowerCase() === "Courses".toLowerCase() ||
      message.toLowerCase() === "Semester Courses".toLowerCase() ||
      message.toLowerCase() === "Registered Courses".toLowerCase() ||
      message.toLowerCase() === "Course Transcripts".toLowerCase() ||
      message.toLowerCase() === "Course Schedule".toLowerCase() 
    ) {
      return this.actionProvider.handleCourseOptions({withAvatar: true});
    }

    return this.actionProvider.handleGeneral(message);
  }
}

export default MessageParser;
