import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Societies from "../../components/Societies";
import Events from "../../components/Events";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

class App extends Component 
{
  render() 
  {
    return (
      <div>
        <div style={{ position: "fixed", width: "100%", zIndex: "5" }}>
          <Navbar />
        </div>

        <section id="home">
          <Hero />
        </section>

        <section id="societies">
          <Societies />
        </section>

        <section id="events">
          <Events />
        </section>

        <section id="contact">
          <ContactForm />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
