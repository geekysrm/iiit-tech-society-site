import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Societies from "../components/Societies";
import Events from '../components/Events';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ position: "fixed", width: "100%", zIndex: "5" }}>
          <Navbar />
        </div>
        <Hero />
        <Societies />
        <Events />

        <br />

        <ContactForm />
        <Footer />
        
      </div>
    );
  }
}

export default App;
