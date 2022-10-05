import React from "react";
import ReactDom from "react-dom";

import App from "./App";

const mount = (el) => {
  ReactDom.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const marketting = document.querySelector("#_marketing-root");
  // asssuming that container doesnot have key as root-product
  if (marketting) {
    mount(marketting);
  }
}

export { mount };
