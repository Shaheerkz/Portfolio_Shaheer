/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiFillGithub } from "react-icons/ai";

function ProjectCards(props) {
  const [showText, setShowText] = useState(false);

  return (
    <div className="project-card-container">
      <Card
        className="project-card mx-3 border-2 border-gradient p-3 rounded-3 bg-white"
        style={{ position: "relative" }}
      >
        <span className="top"></span>
        <span className="bottom"></span>
        <span className="right"></span>
        <span className="leftt"></span>
        <div
          className="card-img-wrapper"
          style={{ height: "300px", overflowY: "hidden" }}
        >
          <Card.Img
            variant="top"
            className="img-fluid rounded-3"
            src={props.img}
          />
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.content}</Card.Text>
          <div className="card-link-container">
            <a
              href={props.link}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setShowText(true)}
              onMouseLeave={() => setShowText(false)}
              className="github-link"
            >
              <AiFillGithub size={24} />
            </a>
            {showText && <span className="view-project-text">View Project</span>}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCards;