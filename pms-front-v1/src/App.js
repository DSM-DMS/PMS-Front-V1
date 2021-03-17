import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import UserRouter from "./router/UserRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" component={UserRouter}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
