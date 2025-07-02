import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Particle from "../Particle";

function Main() {
  return (
    <>
      <Particle />
      <div className="container">
        <Header />
        <Banner />
      </div>
    </>
  );
}

export default Main;
