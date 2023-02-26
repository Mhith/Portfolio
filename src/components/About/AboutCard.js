import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillCaretRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple"><strong>Mohith </strong></span>
            from <span className="purple"> <strong>Bangalore, India.</strong></span>
            <br />I am a junior pursuing B.Tech in Computer Science Engineering (Artificial Intelligence & Machine Learning) in DSU
            Bangalore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <AiFillCaretRight /> Reading Novels
            </li>
            <li className="about-activity">
              <AiFillCaretRight /> Listening to Music
            </li>
            <li className="about-activity">
              <AiFillCaretRight /> Learning Languages
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ace this shit!"{" "}
          </p>
          <footer className="blockquote-footer">Mohith</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
