import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");
  const [formData, setFormData] = useState({
    name: "",
    user_email: "",
    user_message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const serviceID = "testing";
    const templateID = "Thank_You_Form";
    const publicKey = "1KxhQ7FVKj6SJFJeN";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          user_email: formData.user_email,
          user_message: formData.user_message,
        },
        publicKey
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setButtonText("Send");
        toast.success('Successfully sent the message!');
        setFormData({ name: "", user_email: "", user_message: "" }); 
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setButtonText("Send");
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>

        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                <h2>👋 Say Hiii to me!</h2>
                  <form onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Your Email"
                          value={formData.user_email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              user_email: e.target.value,
                            })
                          }
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Your Message"
                          value={formData.user_message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              user_message: e.target.value,
                            })
                          }
                          required
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
