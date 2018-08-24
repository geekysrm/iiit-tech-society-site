import React, { Component } from "react";

import SocietyCard from "../SocietyCard";

import "./style.css";

import acm from "../../images/societies_logo/acm.png";
import p_society from "../../images/societies_logo/p-society.png";
import ieee from "../../images/societies_logo/ieee.png";
import pwl from "../../images/societies_logo/pwl.png";

class Societies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      societies: [
        {
          title: "ACM Students Chapter",
          description: "ACM Students Chapter, IIIT Bhubaneswar",
          image: acm,
          link: "#"
        },
        {
          title: "TARS",
          description: "The Automation and Robotics Society",
          image: "https://via.placeholder.com/300x300?text=TARS",
          link: "#"
        },
        {
          title: "P-Society",
          description: "Programming Society, IIIT Bhubaneswar",
          image: p_society,
          link: "https://p-society.herokuapp.com"
        },
        {
          title: "IEEE Student Branch",
          description: "IEEE Student Branch, IIIT Bhubaneswar",
          image: ieee,
          link: "http://ieee.iiit-bh.ac.in/"
        },
        {
          title: "PWL",
          description: "Papers We Love, Bhubaneswar Chapter",
          image: pwl,
          link: "#"
        }
      ]
    };
  }

  renderSocietyCards = () => {
    return this.state.societies.map(society => {
      return (
        <div>
          <SocietyCard
            image={society.image}
            title={society.title}
            description={society.description}
            link={society.link}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="page-heading">
          Divided By Interest, United By Passion
        </div>

        <br />

        <div className="card-container">{this.renderSocietyCards()}</div>
      </div>
    );
  }
}

export default Societies;
