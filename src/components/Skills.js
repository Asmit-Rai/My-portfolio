import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.webp";
import meter5 from "../assets/img/meter5.webp";
import meter6 from "../assets/img/meter6.svg";
import meter7 from "../assets/img/meter7.svg";
import meter8 from "../assets/img/meter8.webp";
import meter9 from "../assets/img/meter9.webp";
import meter10 from "../assets/img/meter10.svg";
import meter11 from "../assets/img/meter11.svg";
import meter12 from "../assets/img/meter12.svg";
import meter13 from "../assets/img/meter13.webp";
import meter14 from "../assets/img/meter14.svg";
import meter15 from "../assets/img/meter15.svg";
import meter16 from "../assets/img/meter16.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { icon: meter1, title: "Javascript" },
    { icon: meter2, title: "Next.js" },
    { icon: meter3, title: "React.js" },
    { icon: meter4, title: "HTML5" },
    { icon: meter5, title: "CSS" },
    { icon: meter6, title: "Node.js" },
    { icon: meter7, title: "Express.js" },
    { icon: meter8, title: "Tailwind" },
    { icon: meter9, title: "MongoDB" },
    { icon: meter10, title: "MUI" },
    { icon: meter11, title: "ShadcnUI" },
    { icon: meter12, title: "PostgreSQL" },
    { icon: meter16, title: "Firebase" },
    { icon: meter13, title: "Figma" },
    { icon: meter14, title: "Canva" },
    { icon: meter15, title: "Github" },

  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
            <h2 style={{ paddingBottom: "56px" }}>My Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.icon} alt="Skill Icon" />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
