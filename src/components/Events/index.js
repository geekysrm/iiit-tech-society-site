import React, { Component } from 'react';

import './style.css';

import EventCard from '../EventCard';

class Events extends Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            events: [
                {
                    title: "ACM Students Chapter",
                    description: "....................",
                    image: "https://via.placeholder.com/300x300?text=IMAGE",
                    link: "#"
                },
                {
                    title: "ACM Students Chapter",
                    description: "....................",
                    image: "https://via.placeholder.com/300x300?text=IMAGE",
                    link: "#"
                }
            ]
        }
    }

    renderEventCards = () => {
        return this.state.events.map(society => {
          return (
            <div>
              <EventCard
                image={society.image}
                title={society.title}
                description={society.description}
                link={society.link}
              />
            </div>
          );
        });
      };
    

    render() 
    {
        return (
            <div className="events-container" >
                <div className="events-page-heading">
                    We Believe In Learning By Doing
                </div>

                <br />

                <div className="card-container">{this.renderEventCards()}</div>
            </div>
        );
    }
}

export default Events;