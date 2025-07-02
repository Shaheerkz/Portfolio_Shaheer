import React from "react";
import Typewriter from "typewriter-effect";
import BannerImg from "./pages/BannerImg";
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className="container">
      <div className="row">
        {/* left side */}
        <div className="col-md-6 text-area">
          <h1 className="bannerText1">Hello!</h1>
          <h1 className="bannerText2">
            I'm <span>Muhammad Shaheer</span>
          </h1>
          <h2 className="font">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "UI Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <div className="app-form-group mt-5 mr-2">
            <button className="app-form-button"> <Link to="/Contact" style={{ textDecoration: 'none', color: 'inherit' }}>
    Hire Me
  </Link></button>
            <button className="app-form-button2">
  <Link to="/Projects" style={{ textDecoration: 'none', color: 'inherit' }}>
    My Works
  </Link>
</button>
          </div>
        </div>

        {/* right side */}
        <div className="col-md-6" >
          <BannerImg />
        </div>
      </div>
    </div>
  );
}

export default Banner;
