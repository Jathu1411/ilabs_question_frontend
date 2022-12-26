import React from "react";

import { Route, Navigate } from "react-router-dom";

const ProtectedRouter = ({ component, ...rest }) => {
  let RenderComponents = component;

  let hasToken = JSON.parse(localStorage.getItem("auth"));

  console.log(hasToken);

  return (
    <Route
      {...rest}
      render={(props) => {
        return hasToken !== null ? (
          <RenderComponents {...props} />
        ) : (
          <Navigate
            to={{
              pathname: "/login",
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRouter;
