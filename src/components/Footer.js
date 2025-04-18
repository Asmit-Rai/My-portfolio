import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={24} sm={6}>
          </Col>
          <Col size={24} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/asmit-rai-b4a614224/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Asmit-Rai"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://x.com/whoisasmit"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://medium.com/@whoisasmit"><img src={navIcon4} alt="Icon" /></a>

            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
