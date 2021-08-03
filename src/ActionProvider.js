class ActionProvider {
  constructor(createChatBotMessage,  setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  // new method
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, how may I assist you");
    this.updateChatbotState(greetingMessage);
  }

  bye() {
    const byeMessage = this.createChatBotMessage("See you later, thanks for visiting");
    this.updateChatbotState(byeMessage);
  }

  thankYou() {
    const thankYouMessage = this.createChatBotMessage("Thank you have a nice day");
    this.updateChatbotState(thankYouMessage);
  }

   handleContactInfo() {
    const thankYouMessage = this.createChatBotMessage("Thank you have a nice day");
    this.updateChatbotState(thankYouMessage);
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleJustBrowsing = () => {
    const message = this.createChatBotMessage(
      "I will be here to guide, answer routine questions or take a message. Thanks for visiting.",
    );
    this.updateChatbotState(message);
  };

  handleLearnAboutUs = () => {
    const message = this.createChatBotMessage(
      "Chicago State University is known for recruiting students from underserved communities in Illinois. Popular degree programs include psychology, criminal justice, and safety studies, and elementary education. For more information",
      {
        widget: "UrlText",
      }
    );
    this.updateChatbotState(message);
  };

  handleBookAnAppointment = () => {
    const message = this.createChatBotMessage("Choose one of the options below",
      {
        widget: "AppointmentOptions",
        delay: 500,
      }
    );
    this.updateChatbotState(message);
  };

  handleSendRequest = () => {
    const message = this.createChatBotMessage("Please use the below form for Sending a Request",
      {
        widget: "AppointmentForm",
      }
    );
    this.updateChatbotState(message);
  };

   handleLiveHelpMessages = () => {
    const message = this.createChatBotMessage(
      "Please reach out to our help desk team for more information https://www.csu.edu/infotech/helpdesk.htm",
    );

    this.updateChatbotState(message);
  };

  handleHelpDesk = () => {
    const message = this.createChatBotMessage(
      "Clicking following link will take you to our secured online booking system.",
      {
        widget: "HelpDeskLink",
      }
    );

    this.updateChatbotState(message);
  };

  handleOptions = (options) => {
    const message = this.createChatBotMessage(
      "How can I help you? Below are some possible options.",
      {
        widget: "generalOptions",
        delay: 100,
        ...options,
      }
    );

    this.updateChatbotState(message);
  };

  handleBillingOptions = (options) => {
    const message = this.createChatBotMessage(
      "Below are some possible options. That you might be looking for",
      {
        widget: "billingOptions",
        delay: 100,
        ...options,
    }
  );

    this.updateChatbotState(message);
  }

 handleCourseOptions = (options) => {
    const message = this.createChatBotMessage(
      "Below are some possible options. That you might be looking for",
      {
        widget: "courseOptions",
        delay: 100,
        ...options,
    }
  );

    this.updateChatbotState(message);
  }

 handleBillAndPaymentsAccountBalance = () => {
    const message = this.createChatBotMessage(
      "Please provide the below information.",
      {
        widget: "billingAndPayments",
      }
  );
    this.setState((prevState) => ({
      ...prevState,
      billingOption: 'accountbalance',
      messages: [...prevState.messages, message],
    }));
  }

   handleBillAndPaymentsRecentPayments = () => {
    const message = this.createChatBotMessage(
      "Please provide the below information.",
      {
        widget: "billingAndPayments",
    }
  );

    this.setState((prevState) => ({
      ...prevState,
      billingOption: 'payment',
      messages: [...prevState.messages, message],
    }));
  }



 handleRegisteredCourses = () => {
    const message = this.createChatBotMessage(
      "Please provide the below information.",
      {
        widget: "course",
      }
  );
    this.setState((prevState) => ({
      ...prevState,
      courseOption: 'registered_courses',
      messages: [...prevState.messages, message],
    }));
  }

 handleCourseSchedule = () => {
    const message = this.createChatBotMessage(
      "Please provide the below information.",
      {
        widget: "course",
    }
  );

    this.setState((prevState) => ({
      ...prevState,
      courseOption: 'course_schedule',
      messages: [...prevState.messages, message],
    }));
  }


 handleTranscripts = () => {
    const message = this.createChatBotMessage(
      "Please provide the below information.",
      {
        widget: "course",
      }
  );
    this.setState((prevState) => ({
      ...prevState,
      courseOption: 'transcripts',
      messages: [...prevState.messages, message],
    }));
  }

   

  handleCourses = (options) => {
    const message = this.createChatBotMessage(
      "Below are some possible options.",
      {
        widget: "courseOptions",
        delay: 100,
        ...options,
    }
  );  

    this.updateChatbotState(message);
  }


  handleLivehelp = () => {
    const message = this.createChatBotMessage(
      "I will be happy to connect you with one of our staff member.",
    );

    this.updateChatbotState(message);
  };

  handleGeneral = (query) =>{
    const message = this.createChatBotMessage("Is this what you are looking for",
      {
        widget: "GeneralQuery",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );
    this.setState((prevState) => ({
      ...prevState,
      query: query,
      messages: [...prevState.messages, message],
    }));
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;

