import React, { Component } from "react";

import "./style.css";
import EventCard from "../EventCard";
import DesignedButton from "../DesignedButton";

import img_1_1 from '../../images/event_images/image_1_1.jpg';
import img_1_2 from '../../images/event_images/image_1_2.jpg';
import img_2_1 from '../../images/event_images/image_2_1.jpg';
import img_2_2 from '../../images/event_images/image_2_2.jpg';
import img_2_3 from '../../images/event_images/image_2_3.jpg';

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [
        {
          title: "Technova",
          images: [
            {
              src: img_1_1
            },
            {
              src: img_1_2
            }
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,"
        },
        {
          title: "ML Workshop",
          images: [
            {
              src: img_2_1
            },
            {
              src: img_2_2
            },
            {
              src: img_2_3
            }
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,"
        }
      ]
    };
  }

  renderEventCards = () => {
    return this.state.events.map(event => {
      return (
        <div>
          <EventCard
            items={event.images}
            title={event.title}
            description={event.description}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="events-container">
        <div className="events-page-heading">
          We Believe In Learning By Doing
        </div>

        <br />

        <div className="card-container">{this.renderEventCards()}</div>

        <DesignedButton text="view all events" link="#" />
      </div>
    );
  }
}

export default Events;
