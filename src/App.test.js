import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./App";

test("renders learn react link", () => {
  const dIV = document.createElement("div");
  ReactDOM.render(<AppWrapper />, dIV);
  ReactDOM.unmountComponentAtNode(dIV);
});
