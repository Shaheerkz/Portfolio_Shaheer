import React from "react";
import Header from "../../components/Header";
import Particle from "../../Particle";
import BannerImg from "../../components/pages/BannerImg";
import shaheerImg from "../../assets/Layer-1.png";

function AboutMe() {
  return (
    <>
      <Particle />
      <div className="container">
        <Header />

        <div className="row">
          {/* left side  */}
          <div className="col-md-6">
            <div className="center col-md-3 text-center ">
              <img className="myImgg custom-bg-color" src={shaheerImg} />
            </div>
          </div>

          {/* rigth side */}
          <div className="col-md-6 my-0">
            <div className="article p-md-5 p-3 bg-gray-100 rounded">
              <h1 className="text-start text-uppercase fw-bolder text-white mb-4">
                About Me
              </h1>
              <p className="text-gray-700 fs-6">
                "I'm a passionate front-end web developer specializing in crafting responsive, user-centric interfaces using HTML, CSS, and modern JavaScript. With hands-on experience in frameworks like Tailwind CSS, Bootstrap, and React.js, I build sleek, high-performance web applications that scale. I write clean, maintainable code with TypeScript, and bring additional versatility with jQuery and WordPress integration. Whether it's building interactive UIs or optimizing for mobile-first experiences, I deliver polished, feature-rich solutions tailored to real-world needs."
              </p>
              <h2 className="mt-6 fs-6 fw-bold">
                <span className="text-white label">Name:</span>
                <span className=" text-gray-500 fw-light fs-5 value ms-2">
                  Muhammad Shaher
                </span>
              </h2>

              <h2 className="mt-2 fs-6 fw-bold">
                <span className="text-white label">Contact:</span>
                <span className=" text-gray-500 fw-light fs-5 value ms-2">
                  0319-3865337
                </span>
              </h2>

              <h2 className="mt-2 fs-6 fw-bold">
                <span className="text-white label">E-Mail:</span>
                <span className="text-gray-500 fw-light fs-5 value ms-2">
                  shariikhan925@gmail.com
                </span>
              </h2>

              <div className="app-form-group mt-4 mr-2">
                <button className="app-form-button2">Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;

// "I possess a strong command of HTML and CSS, serving as the cornerstone of
// web development. My expertise extends to responsive web
// development principles, ensuring seamless optimization across
// diverse devices and screen sizes. Additionally, I am adept at
// leveraging front-end frameworks such as Bootstrap and Tailwind to
// expedite the development process effectively. Furthermore, my
// proficiency includes utilizing JavaScript and React.js, a widely
// acclaimed JavaScript library, to craft dynamic and engaging user
// interfaces. By incorporating React with TypeScript, I enhance code
// robustness and maintainability, thus elevating the quality of web
// applications. My comprehensive tech stack encompasses HTML, CSS,
// Bootstrap, Tailwind, JavaScript, React.js, React with TypeScript,
// jQuery, and WordPress, particularly leveraging tools like
// Elementor and Salient Page Builder. With this diverse skill set, I
// excel in creating modern, responsive, and feature-rich web
// applications, positioning myself as a versatile and accomplished
// front-end web developer."
