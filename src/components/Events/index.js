import React, { Component } from "react";

import "./style.css";
import EventCard from "../EventCard";
import DesignedButton from "../DesignedButton";

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [
        {
          title: "Event 1",
          images: [
            {
              src: "https://via.placeholder.com/500x300?text=IMAGE"
            },
            {
              src: "https://via.placeholder.com/500x300?text=IMAGE"
            }
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,"
        },
        {
          title: "Event 2",
          images: [
            {
              src: "https://via.placeholder.com/500x300?text=IMAGE"
            },
            {
              src: "https://via.placeholder.com/500x300?text=IMAGE"
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
