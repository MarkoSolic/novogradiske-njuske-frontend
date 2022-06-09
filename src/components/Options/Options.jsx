import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "O udruzi",
      handler: props.actionProvider.onama,
      id: 1,
    },
    {
      text: "Gdje se nalazite?",
      handler: props.actionProvider.mjesto,
      id: 2,
    },
    { text: "Pomoć udruzi", handler: props.actionProvider.pomoc, id: 3 },
    {
      text: "Udomljavanje ljubimca",
      handler: props.actionProvider.udomljavanje,
      id: 4,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
