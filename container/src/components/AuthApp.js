import React, { useRef, useEffect } from "react";

import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

const MarketingApp = () => {
  const authRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(authRef.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname != nextPathname) {
          history.push(nextPathname);
        }
      },
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={authRef} />;
};

export default MarketingApp;
