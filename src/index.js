import React from "react";
import ReactDOM from "react-dom";

import FastTree from "./FastTree";
import commentData from "./data";

const App = () => {
  return <FastTree items={commentData} />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
