import "./mediaCard.css";
import React from "react";
import { Tooltip, OverlayTrigger, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function MediaCard() {
  const renderResumeTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Resume
    </Tooltip>
  );

  const renderGithubTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Github
    </Tooltip>
  );

  const renderLinkedinTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      LinkedIn
    </Tooltip>
  );

  const renderEmailTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Email
    </Tooltip>
  );
  return (
    <Card className="mediaCard text-center">
      <Card.Body>
        <Card.Title>Find Me Here</Card.Title>
        <hr />
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 50, hide: 10 }}
          overlay={renderEmailTooltip}
        >
          <Button className="icon">
            <FontAwesomeIcon icon={faEnvelope} size="2x"></FontAwesomeIcon>
          </Button>
        </OverlayTrigger>

        <OverlayTrigger
          placement="bottom"
          delay={{ show: 50, hide: 10 }}
          overlay={renderGithubTooltip}
        >
          <Button
            className="icon"
            onClick={() => window.open("https://github.com/haywah27", "_blank")}
          >
            <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
          </Button>
        </OverlayTrigger>

        <OverlayTrigger
          placement="bottom"
          delay={{ show: 50, hide: 10 }}
          overlay={renderLinkedinTooltip}
        >
          <Button
            className="icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/wahlroos/", "_blank")
            }
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x"></FontAwesomeIcon>
          </Button>
        </OverlayTrigger>

        <OverlayTrigger
          placement="bottom"
          delay={{ show: 50, hide: 10 }}
          overlay={renderResumeTooltip}
        >
          <Button>
            <FontAwesomeIcon icon={faFile} size="2x"></FontAwesomeIcon>
          </Button>
        </OverlayTrigger>
      </Card.Body>
    </Card>
  );
}

export default MediaCard;
