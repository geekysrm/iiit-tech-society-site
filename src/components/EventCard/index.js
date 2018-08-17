import React from "react";
import { Card, Icon, Button, Image } from "semantic-ui-react";

import "./style.css";

const getLink = link => (
  <Button animated secondary onClick={() => window.location.assign(link)}>
    <div className="event-btn">
      <Button.Content visible>View Details</Button.Content>
      <Button.Content hidden>
        <Icon name="arrow right" />
      </Button.Content>
    </div>
  </Button>
);

const EventCard = ({ image, title, description, link }) => (
  <div className="event-card">
    <Card fluid>
      <div className="event-card-image-container">
        <Image src={image} className="event-card-image" />
      </div>

      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="event-btn-container">{getLink(link)}</div>
      </Card.Content>
    </Card>
  </div>
);

export default EventCard;
