import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent", key: "e1" },
  "Hello From React!"
);
const child = React.createElement(
  "div",
  { id: "child", key: "e2" },
  "Hello once agin"
);

const newTag = <h1 className="demo">This is rendered using jsx</h1>;
const container = React.createElement(
  "div",
  {
    id: "main",
  },
  [parent, newTag, child]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
