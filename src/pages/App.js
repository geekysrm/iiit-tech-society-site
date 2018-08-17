import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Societies from '../components/Societies';
import SocietyCard from "../components/SocietyCard";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Societies />

        {/*Do like this for SocietyCard*/}
        <SocietyCard
          image="https://source.unsplash.com/random/800x600"
          header="P Society"
          description="We are P Society"
          link="https://www.google.com"
        />
        
      </div>
    );
  }
}

export default App;
