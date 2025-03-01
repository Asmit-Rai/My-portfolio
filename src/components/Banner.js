import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";


import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen"; 

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [bgImage, setBgImage] = useState("");
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;


  useEffect(() => {
    const randomBgNumber = Math.floor(Math.random() * 10) + 1;
    import(`../assets/img/bg${randomBgNumber}.png`)
      .then((image) => setBgImage(image.default))
      .catch((err) => console.error("Image not found", err));
  }, []);


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section
      className="banner"
      id="home"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "260px 0 100px 0",
      }}
    >
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hey, I'm Asmit Rai`}</h1>
                  <h2
                    className="txt-rotate"
                    dataPeriod="100"
                    data-rotate='[ "Web Developer", "App Developer", "UI/UX Designer" ]'
                  >
                    <span className="wrap">{text}</span>
                  </h2>
                  <p>
                    I'm a Full-Stack Developer, building modern and creative
                    websites and applications. With expertise in both Frontend
                    and Backend Development, I work with React, Next.js, and
                    Tailwind CSS to craft responsive, user-friendly experiences.
                  </p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/asmit-rai-b4a614224/",
                        "_blank"
                      )
                    }
                  >
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
