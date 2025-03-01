import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";

export const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <h1 className="h6 text-uppercase">MY WORK</h1>
            <h2>Functionality focused, design driven, and user centric</h2>
          </Col>
        </Row>

        <Row className="mt-5">
  <Col md={6} className="p-3 project-text">
    <h2 className="text-info">Code Collab</h2>
    <hr className="venture-hr" />
    <h3>Collaborative Coding Platform</h3>
    <p className="text-white-50">
      Technologies: React, WebSocket, Node.js, Express.js. Created a real-time
      collaborative coding editor for multiple programmers. Integrated CodeMirror API
      for advanced code editing functionality.
    </p>
    <a href="https://github.com/Asmit-Rai/Code-Collab" className="text-info" target="_blank" rel="noopener noreferrer">
      View on GitHub →
    </a>
  </Col>
  <Col md={6}>
    <img src={projImg1} alt="Code Collab" className="img-fluid rounded shadow" />
  </Col>
</Row>


<Row className="mt-5">
  <Col md={6}>
    <img src={projImg2} alt="Bharat Robotics" className="img-fluid rounded shadow" />
  </Col>
  <Col md={6} className="p-3 project-text">
    <h2 className="text-warning">Bharat Robotics</h2>
    <h3>Empowering Learning with Online Courses</h3>
    <p className="text-white-50">
      Built a course-selling platform where users can register for courses. Integrated an admin panel
      to manage course enrollments, feedback, and ideas. Utilized Firebase Authentication for user
      registration and Firebase Database for seamless data management.
    </p>
    <a href="https://github.com/Asmit-Rai/Bharat_Robotics" className="text-info" target="_blank" rel="noopener noreferrer">
      View on GitHub →
    </a>
  </Col>
</Row>


<Row className="mt-5">
  <Col md={6} className="p-3 project-text">
    <h2 className="text-info">Web-Blogging</h2>
    <h3>Full-Stack Blogging Platform</h3>
    <p className="text-white-50">
      Developed a full-stack web application using React, Firebase, and Node.js. The platform allows users 
      to sign up, log in, and create, edit, and delete blog posts. It features user authentication, CRUD 
      operations, and a responsive UI with Tailwind CSS.
    </p>
    <ul className="text-white-50">
      <li>Firebase Authentication for secure login/signup</li>
      <li>Node.js & Express backend for handling API requests</li>
      <li>Firestore for real-time database storage</li>
      <li>Deployed on Vercel with GitHub version control</li>
    </ul>
    <a href="https://github.com/Asmit-Rai/Capital-Rush" className="text-info" target="_blank" rel="noopener noreferrer">
      View on GitHub →
    </a>
  </Col>
  <Col md={6}>
    <img src={projImg4} alt="Web-Blogging" className="img-fluid rounded shadow" />
  </Col>
</Row>

<Row className="mt-5">
  <Col md={6}>
    <img src={projImg5} alt="Amazon Frontend Clone" className="img-fluid rounded shadow" />
  </Col>
  <Col md={6} className="p-3 project-text">
    <h2 className="text-warning">Amazon Frontend Clone</h2>
    <h3>Replica of Amazon's Landing Page</h3>
    <p className="text-white-50">
      Developed a frontend clone of Amazon using HTML, CSS, and JavaScript. The landing page mimics the 
      original design, featuring responsive layouts, navigation, and interactive elements.
    </p>
    <ul className="text-white-50">
      <li> Styled using CSS for a visually accurate design</li>
      <li> Interactive elements powered by JavaScript</li>
      <li> Fully responsive and optimized for various screen sizes</li>
    </ul>
    <a href="https://github.com/Asmit-Rai/Amazon-Website" className="text-info" target="_blank" rel="noopener noreferrer">
      View on GitHub →
    </a>
  </Col>
</Row>


<Row className="mt-5">
  <Col md={6} className="p-3 project-text">
    <h2 className="text-warning">Study Buddy</h2>
    <h3>Your Ultimate Learning Companion</h3>
    <p className="text-white-50">
      Developed a learning platform using HTML, CSS, JavaScript, PHP, and Apache. Study Buddy offers structured 
      roadmaps, video lectures on programming and development, quizzes, and study sessions using the Pomodoro technique.
    </p>
    <ul className="text-white-50">
      <li> Structured learning roadmaps for various programming languages</li>
      <li>Watch lectures on web development, data structures, and more</li>
      <li>Conduct and take quizzes for self-assessment</li>
      <li>Study sessions with Pomodoro technique integration</li>
    </ul>
    <a href="https://github.com/Asmit-Rai/Studdy-Buddy" className="text-info" target="_blank" rel="noopener noreferrer">
      View on GitHub →
    </a>
  </Col>
  <Col md={6}>
    <img src={projImg6} alt="Study Buddy" className="img-fluid rounded shadow" />
  </Col>
</Row>


<Row className="mt-5">
<Col md={6}>
    <img src={projImg7} alt="Music Player Web App" className="img-fluid rounded shadow" />
  </Col>
  <Col md={6} className="p-3 project-text">
    <h2 className="text-warning">Music Player Web App</h2>
    <h3>Enjoy Your Favorite Tunes</h3>
    <p className="text-white-50">
      Built a simple and interactive music player using HTML, CSS, and JavaScript. The app allows users to play, 
      pause, and navigate through songs seamlessly.
    </p>
    <ul className="text-white-50">
      <li>Play and pause functionality implemented using JavaScript</li>
      <li>Supports multiple audio tracks with an intuitive UI</li>
      <li>Styled with CSS for a sleek and responsive design</li>
    </ul>
    <a href="https://github.com/Asmit-Rai/Music-Player" className="text-info" target="_blank" rel="noopener noreferrer">
      View on GitHub →
    </a>
  </Col>
</Row>

      </Container>
    </section>
  );
}
