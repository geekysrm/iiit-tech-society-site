import React, { Component } from 'react';

import EventPageCard from '../../components/EventPageCards';

import image_1_1 from '../../images/event_images/image_1_2.jpg';
import image_2_1 from '../../images/event_images/image_2_3.jpg';

import './style.css';

class Events extends Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            upcomingEvents: [
                {
                    name: 'Technova',
                    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,",
                    day: '12',
                    month: 'Aug',
                    year: '2018',
                    image: image_1_1
                },
                {
                    name: 'ML Workshop',
                    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,",
                    day: '12',
                    month: 'Aug',
                    year: '2018',
                    image: image_2_1
                }
            ],
            pastEvents: [
                {
                    name: 'Technova',
                    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,",
                    day: '12',
                    month: 'Aug',
                    year: '2017',
                    image: image_1_1
                },
                {
                    name: 'ML Workshop',
                    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,",
                    day: '12',
                    month: 'Aug',
                    year: '2017',
                    image: image_2_1
                }
            ]
        }
    }

    renderUpcomingEvents = () => 
    {
        return this.state.upcomingEvents.map( event => {
            return (
                <div>
                <EventPageCard
                    name={event.name}
                    content={event.content}
                    day={event.day}
                    month={event.month}
                    year={event.year}
                    image={event.image}
                />
                </div>
            );
        });
    }

    renderPastEvents = () => 
    {
        return this.state.pastEvents.map( event => {
            return (
                <div>
                <EventPageCard
                    name={event.name}
                    content={event.content}
                    day={event.day}
                    month={event.month}
                    year={event.year}
                    image={event.image}
                />
                </div>
            );
        })
    }

    render() 
    {
        return (
            <div>
                
                <div className="page-heading">
                    Upcomming Events
                </div>

                <div className="eventspage-events-container" >
                    {this.renderUpcomingEvents()}
                </div>

                <div className="page-heading">
                    Past Events
                </div>

                <div className="eventspage-events-container" >
                    {this.renderPastEvents()}
                </div>

            </div>
        );
    }
}

export default Events;