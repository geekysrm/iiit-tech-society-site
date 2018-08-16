import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import './index.css';

import Navbar from "../components/Navbar";
import Hero from '../components/Hero';

class App extends Component {
  render() {
    return (
      <div>

        <Navbar />
        <Hero />
        <div className="heading" >
          Tech Scociety <br />
          IIIT Bhubaneswar
        </div>

        <div className="non_hero">
            <h1>
              continue ...
            </h1>
        </div>
      </div>
    );
  }
}

export default App;
