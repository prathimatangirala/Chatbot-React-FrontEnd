import React from "react";

import { ReactComponent as CSUBotIcon } from "./robot-line.svg";

const CSUBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-container">
        <CSUBotIcon className="react-chatbot-kit-chat-bot-avatar-icon" />
      </div>
    </div>
  );
};

export default CSUBotAvatar;