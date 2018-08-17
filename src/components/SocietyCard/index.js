import React from "react";
import { Card, Icon, Button, Image } from "semantic-ui-react";

import './style.css';

const getLink = link => (
  <Button 
    animated 
    secondary
    onClick={() => window.location.assign(link)}
  >
    <div className="society-btn" >
    <Button.Content visible>View Details</Button.Content>
    <Button.Content hidden>
      <Icon name="arrow right" />
    </Button.Content>
    </div>
  </Button>
);

const SocietyCard = ({ image, title, description, link }) => (

  <div className="society-card" >
  <Card>

    <div className="society-card-image-container" >
      <Image src={image} className="society-card-image" />  
    </div>

    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className="society-btn-container" >
      {getLink(link)}
      </div>
    </Card.Content>

  </Card>
  </div>

);

export default SocietyCard;
