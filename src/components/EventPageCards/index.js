import React, { Component } from 'react';

import './style.css';

class EventPageCards extends Component 
{
    render() 
    {
        return (
            <div className="event-page-card-conatiner" >
                <div className="event-page-card-wrapper"
                    style={{ background: `url(${this.props.image}) 20% 1% / cover no-repeat` }}
                >

                <div className="event-page-card-date">
                    <span className="event-page-card-day">{this.props.day}</span>
                    <span className="event-page-card-month">{this.props.month}</span>
                    <span className="event-page-card-year">{this.props.year}</span>
                </div>

                <div className="event-page-card-data">

                    <div className="event-page-card-content">

                    <div className="event-page-card-title">{this.props.name}</div>
                    <div className="event-page-card-text">{this.props.content}</div>
                    
                    </div>
                    
                </div>
                </div>
            </div>
        );
    }
}

export default EventPageCards;