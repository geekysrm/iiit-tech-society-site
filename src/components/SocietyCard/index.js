import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";

const getLink = link => (
  <Button animated onClick={() => window.location.assign(link)}>
    <Button.Content visible>View Details</Button.Content>
    <Button.Content hidden>
      <Icon name="arrow right" />
    </Button.Content>
  </Button>
);

const SocietyCard = ({ image, title, description, link }) => (
  <Card
    image={image}
    header={title}
    description={description}
    extra={getLink(link)}
  />
);

export default SocietyCard;
