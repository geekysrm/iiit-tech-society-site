import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./pages/App";
import registerServiceWorker from "./registerServiceWorker";

import FullPageWrapper from "./FullpageScroll";

const fullpageOptions = {
  anchors: ["firstPage", "secondPage", "thirdPage"],
  sectionsColor: ["#282c34", "#ff5f45", "#0798ec"],
  callbacks: ["onLeave"],
  scrollOverflow: true
};

ReactDOM.render(
  <FullPageWrapper {...fullpageOptions} />,
  document.getElementById("root")
);
registerServiceWorker();
