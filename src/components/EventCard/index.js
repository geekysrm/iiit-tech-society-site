import React,{ Component } from "react";

import "./style.css";

import ImageCarousel from '../Carousel';

class EventCard extends Component 
{
  render() 
  {
    return (
      <div className="event-card-container">
        <div className="event-image-container" >
          <ImageCarousel items={this.props.items}/>
        </div>
        
        <div className="event-title" >
          {this.props.title}
        </div>

        <div className="event-text" >
          {this.props.description}
        </div>

        <br />
      </div>
    );
  }
}

export default EventCard;
