import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Societies from "../components/Societies";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Societies />
      </div>
    );
  }
}

export default App;
