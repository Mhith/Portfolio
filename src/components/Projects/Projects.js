import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jerry from "../../Assets/Projects/jerry.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jerry}
              isBlog={false}
              title="Jerry"
              description="Jerry is a Dall-E clone project that utilizes the same API to generate images from textual input. Using generative adversarial networks (GANs), Jerry aims to replicate Dall-E's impressive image creation capabilities while also exploring new directions in AI-generated images."
              ghLink="https://github.com/Mhith/Jerry"
              demoLink="https://jerry-ai.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
