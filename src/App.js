import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import useStyles from "./styles";
import ActionProvider from "../src/chatbot/ActionProvider";
import config from "../src/chatbot/config";
import MessageParser from "../src/chatbot/MessageParser";
import Chatbot from "react-chatbot-kit";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer";
import RedditIcon from "@material-ui/icons/Reddit";
const App = () => {
  const classes = useStyles();
  const [showDiv, setShowDiv] = useState(true);

  return (
    <div>
      <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/auth" exact component={Auth}></Route>
          </Switch>
          <div className={classes.chatbotContainer}>
            {showDiv ? (
              <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
              ></Chatbot>
            ) : null}
          </div>
          <button
            className={classes.chatbotButton}
            onClick={() => setShowDiv(!showDiv)}
          >
            <RedditIcon />
          </button>
          <Footer />
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
