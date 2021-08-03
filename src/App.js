import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import { ConditionallyRender } from "react-util-kit";
import "./App.css";

import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";
import { ReactComponent as ButtonIcon } from "./assets/icons/robot.svg";

function App() {

  const [showChatbot, toggleChatbot] = useState(false);


  return (
    <div className="App">
      <iframe className="iframe-csu"id="website-mock" src='https://csu.edu'>
            Your browser doesn't support iframes
        </iframe>

      <div className="app-chatbot-container">
          <ConditionallyRender
            ifTrue={showChatbot}
            show={
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            }
          />
        </div>

        <button
          className="app-chatbot-button"
          onClick={() => toggleChatbot((prev) => !prev)}
        >
          <ButtonIcon className="app-chatbot-button-icon" />
        </button>

    </div>
  );
}

export default App;
