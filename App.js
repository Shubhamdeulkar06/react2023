import React from "react";
import ReactDOM from "react-dom/client";

// this is conversion done by babel
const parent = React.createElement(
  "div",
  { id: "parent", key: "e1" },
  "Hello From React! (This is written without using jsx)"
);

// react element is an object
const newElement = <h1 className="demo">This is rendered using jsx</h1>;

// this will return both react element and components
const Container2 = () => {
  return (
    <div>
      <HeaderComponent />
      {[parent, newElement]}
    </div>
  );
};

// React components
// Functional components => it is nothing but a javascript function which returns an react element or composition of elements or component itself
// class based components -old way

// functional component example
const HeaderComponent = () => {
  return <h1>This is written using functional component</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Container2 />);
