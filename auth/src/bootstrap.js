import React from "react";
import ReactDom from "react-dom";

import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();
  if (onNavigate) history.listen(onNavigate);
  ReactDom.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname != nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const marketting = document.querySelector("#_auth-root");
  // asssuming that container doesnot have key as root-product
  if (marketting) {
    mount(marketting, {
      defaultHistory: createBrowserHistory(),
    });
  }
}

export { mount };
