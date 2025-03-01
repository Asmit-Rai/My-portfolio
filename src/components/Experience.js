import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import feeding from "../../src/assets/img/feeding-logo.jpg";
import bizfoc from "../../src/assets/img/bizfoc-logo.jpg";

// Experience data
const experienceData = [
  {
    company: "FeedingTrends",
    title: "Frontend Developer Intern",
    duration: "June 2024 - Aug 2024",
    responsibilities: [
      "Developed Complete Feeding Website: Built a fully-responsive FeedingTrends website using Next.js, leveraging SSR/SSG for optimal performance and integrating modern UI components with React, Tailwind CSS, and Shadcn/UI.",
      "Improved Website Performance: Achieved a 20-30% improvement in website performance by utilizing Next.js for SSR and SSG.",
      "Technology Integration: Integrated frameworks like Logto for authentication and Redux for state management to ensure project success.",
    ],
    logo: feeding,
  },
  {
    company: "BizFoc",
    title: "Web Developer Intern",
    duration: "May 2024 – July 2024",
    responsibilities: [
      "Developed Web Pages: Created web pages for business registrations, including Stock Audit, LLP, GST, and FSSAI, leading to a 30% increase in user registrations.",
      "Collaborative Enhancement: Collaborated with teams to ensure accurate information, enhancing user experience and reducing errors.",
      "Traffic Analysis: Analyzed web traffic, achieving 3.85K visits from India, United States, Philippines, and Canada, representing 89% of total traffic.",
    ],
    logo: bizfoc,
  },
];

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleExperienceClick = (index) => {
    setSelectedExperience(selectedExperience === index ? null : index);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-light mb-5 display-4">Experience</h2>
      <div className="row justify-content-center">
        <div className="col-lg-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className={`card mb-4 p-4 bg-dark text-light shadow-lg ${
                selectedExperience === index ? "border-primary" : ""
              }`}
              onClick={() => handleExperienceClick(index)}
              whileHover={{ scale: 1.05 }}
              style={{ cursor: "pointer", fontSize: "2.2rem" }}
            >
              <div className="card-body d-flex align-items-center">
                <img
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  className="rounded-circle me-4"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />

                <div className="flex-grow-1">
                  <h4 className="mb-1 text-warning">{exp.company}</h4>
                  <h5 className="mb-0 text-info">{exp.title}</h5>
                  <p className="text-muted fs-5">{exp.duration}</p>
                </div>
              </div>

              <AnimatePresence>
                {selectedExperience === index && (
                  <motion.ul
                    className="list-group list-group-flush bg-dark"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.responsibilities.map((responsibility, rIndex) => (
                      <motion.li
                        key={rIndex}
                        className="list-group-item bg-dark text-light fs-5"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: rIndex * 0.1 }}
                      >
                        {responsibility}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
