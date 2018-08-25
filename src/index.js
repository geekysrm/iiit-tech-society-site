import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./pages/app";
import Events from './pages/events';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/events" component={Events} />
        <Redirect from="*" to={"/"} />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById("root")
);
registerServiceWorker();
