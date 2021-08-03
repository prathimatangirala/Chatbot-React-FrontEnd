import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";
import CSUBotAvatar from "./components/CSUBotAvatar/CSUBotAvatar";
import GeneralOptions from "./components/GeneralOptions/GeneralOptions";
import Options from "./components/Options/Options";
import UrlText from "./components/URLText/URLText";
import AppointmentForm from "./components/BookAppointment/AppointmentForm";
import GeneralQuery from "./components/GeneralQuery/GeneralQuery";
import AppointmentOptions from "./components/BookAppointment/AppointmentOptions";
import HelpDeskLink from "./components/BookAppointment/HelpDeskLink";
import BillingOptions from "./components/BillingOptions/BillingOptions";
import CourseOptions from "./components/CourseOptions/CourseOptions";
import BillAndPayments from "./components/BillingOptions/BillAndPayments";
import Courses from "./components/CourseOptions/Courses";



const botName = "CSU-BOT";

const config = {
  botName: botName,
  lang: "en",
  initialMessages: [
    createChatBotMessage(`Hi, I'm ${botName}.`),
    createChatBotMessage(
      "What brings you here? here are some of the options for you",
      {
        widget: "generalOptions",
        delay: 500,
      }
    ), 
  ],
  customComponents: {
     // Replaces the default header
    header: () => <div style={{ backgroundColor: "rgb(55, 107, 126)", padding: "5px", borderRadius: "3px", color:"rgb(255,255,255)" }}>Welcome to Chat</div>,
    // Replaces the default bot avatar
    botAvatar: (props) => <CSUBotAvatar {...props} />
  },
  state: {
    query : "",
    billingOption: "",
    courseOption: "",
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "GeneralQuery",
      widgetFunc: (props) => <GeneralQuery {...props} />,
      mapStateToProps: ["query"],
    },
    {
      widgetName: "billingAndPayments",
      widgetFunc: (props) => <BillAndPayments {...props} />,
      mapStateToProps: ["billingOption"],
    },
    {
      widgetName: "course",
      widgetFunc: (props) => <Courses {...props} />,
      mapStateToProps: ["courseOption"],
    },
    {
      widgetName: "generalOptions",
      widgetFunc: (props) => <GeneralOptions {...props} />,
    },
    {
      widgetName: "billingOptions",
      widgetFunc: (props) => <BillingOptions {...props} />,
    },
    {
      widgetName: "courseOptions",
      widgetFunc: (props) => <CourseOptions {...props} />,
    },
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "UrlText",
      widgetFunc: (props) => <UrlText {...props} />,
    },
    {
      widgetName: "AppointmentForm",
      widgetFunc: (props) => <AppointmentForm {...props} />,
    },
    {
      widgetName: "AppointmentOptions",
      widgetFunc: (props) => <AppointmentOptions {...props} />,
    },
    {
      widgetName: "HelpDeskLink",
      widgetFunc: (props) => <HelpDeskLink {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
