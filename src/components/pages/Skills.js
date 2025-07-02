import React from "react";
import Header from "../../components/Header";
import Particle from "../../Particle";
import Card from "./Card.js";
import "../../styles/skills.css";

function Skills() {
  // Split the skillsData into two separate arrays
  const leftSkills = [
    { id: 1, heading: "HTML", progress: 90 },
    { id: 2, heading: "CSS / SCSS", progress: 90 },
    { id: 3, heading: "BOOTSTRAP", progress: 90 },
    { id: 4, heading: "TAILWIND", progress: 90 },
  ];

  const rightSkills = [
    { id: 5, heading: "JAVASCRIPT", progress: 70 },
    { id: 6, heading: "JQUERY", progress: 80 },
    { id: 7, heading: "REACT", progress: 80 },
    { id: 8, heading: "GITHUB", progress: 60 },
  ];

  return (
    <>
      <Particle />
      <div className="container lopppp">
        <Header />
        <div className="main-title">
          <h1>My Skills</h1>
          <p>
          I'm passionate about developing innovative solutions and continually improving my skills.

          </p>
        </div>
        <div className="row">
          {/* left section  */}
          <section className="col">
            <div className="skills-container">
              {leftSkills.map((skill) => (
                <div key={skill.id} className="skill">
                  <div className="subject">{skill.heading}</div>
                  <div className="progress-bar">
                    <div
                      className="progress-line "
                      style={{ maxWidth: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* rigth section  */}
          <section className="col">
            <div className="skills-container">
              {rightSkills.map((skill) => (
                <div key={skill.id} className="skill">
                  <div className="subject">{skill.heading}</div>
                  <div className="progress-bar">
                    <div
                      className="progress-line"
                      style={{ maxWidth: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Skills;
