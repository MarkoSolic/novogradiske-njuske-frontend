import { createChatBotMessage } from "react-chatbot-kit";

import React from "react";
import Options from "../components/Options/Options";

import BotAvatar from "./BotAvatar/BotAvatar";

const botName = "Chatbot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      ` Pozdrav ja sam ${botName}. Dobrodošli na stranicu novogradiške njuške`,
      {
        widget: "options",
      }
    ),
  ],

  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: "#233953",
          padding: "15px",
          borderRadius: "5px 5px 0px 0px",
          color: "white",
        }}
      >
        Razgovor sa Chatbot-om
      </div>
    ),
    botAvatar: (props) => <BotAvatar {...props} />,
  },

  customStyles: {
    botMessageBox: {
      backgroundColor: "#233953",
    },

    chatButton: {
      backgroundColor: "#233953",
    },

    innerContainer: {
      width: "500px",
    },
  },

  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
      mapStateToProps: ["gist"],
    },
  ],
};

export default config;
