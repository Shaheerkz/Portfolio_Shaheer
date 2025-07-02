import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Particle from "../../Particle";
import Header from "../Header";
import Slider from "react-slick";
import ProjectCards from "./ProjectCards";
import MyImg from "../../assets/amazon.png";
import Brawds from "../../assets/novel.jpg";
import Memo from "../../assets/memorable.jpg";
import Luis from "../../assets/websitesphere.jpg";
import Future from "../../assets/webfinity.jpg";
import American from "../../assets/american.png";
import Recto from "../../assets/pioneer.jpg";
import Kitchen from '../../assets/techformia.png';
import Scrubs from '../../assets/allamerican.jpg';
import ScrubsWeb from "../../assets/ghostbox.jpg";
import Krazy from "../../assets/moviecell.jpg";
import Mac from "../../assets/just-mac.jpg";

function Projects() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ProjectCard = [
    {
      id: 1,
      img: American,
      title: "American Publishings",
      link: "https://americanpublishings.com/",
      button: "View Project",
    },
    {
      id: 2,
      img: Recto,
      title: "Pioneer Book Publishers",
      link: "https://pioneerbookpublishers.com/",
      button: "View Project",
    },
    {
      id: 3,
      img: Kitchen,
      title: "Techformia LLC",
      link: "https://techformia.com/",
      button: "View Project",
    },
    {
      id: 4,
      img: MyImg,
      title: "Amazon Digital Book",
      link: "https://amazondigitalpublishing.co/",
      button: "View Project",
    },
    {
      id: 5,
      img: Brawds,
      title: "The Novel Nations",
      link: "https://thenovelnations.com/",
      button: "View Project",
    },
    {
      id: 6,
      img: Memo,
      title: "Memorable-world",
      link: "https://memorableworld.com/",
      button: "View Project",
    },
    {
      id: 7,
      img: Luis,
      title: "Websitesphere",
      link: "https://www.websitesphere.com/",
      button: "View Project",
    },
    {
      id: 8,
      img: Future,
      title: "Webfinity Inc",
      link: "https://www.webfinityinc.com/",
      button: "View Project",
    },
    {
      id: 9,
      img: Scrubs,
      title: "All American Apps",
      link: "https://allamericanapps.com/",
      button: "View Project",
    },
    {
      id: 10,
      img: ScrubsWeb,
      title: "American Publishings",
      link: "https://americanpublishings.com/ghost-demo/",
      button: "View Project",
    },
    {
      id: 11,
      img: Krazy,
      title: "Movie Cell",
      link: "https://www.moviecellilluminations.com/",
      button: "View Project",
    },
    {
      id: 12,
      img: Mac,
      title: "Just MacBook",
      link: "https://justmac.com/laptops/",
      button: "View Project",
    },
  ];

  return (
    <>
      <Particle />
      <div className="container lopppp">
        <Header />
        <div className="row mt-5">
          <Slider {...settings}>
            {ProjectCard.map((card) => (
              <div key={card.id}>
                <ProjectCards
                  img={card.img}
                  title={card.title}
                  link={card.link}
                  button={card.button}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Projects;
