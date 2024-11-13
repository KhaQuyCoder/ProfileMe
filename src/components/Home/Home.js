import React, { useEffect, useRef } from "react";
import meImage from "../../assets/image/AnhBonTrap.jpg";
import "./Home.css";
import Skill from "../../childComponent/Skill/Skill";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
import Project from "../../childComponent/projects/Project";
import Contact from "../../childComponent/contact/Contact";
import Movie from "../../childComponent/movie/Movie";
import "../../reponsive/Reponsive.css";
const Home = () => {
  const infor = useRef(null);
  const mainInfor = useRef();
  const imageMe = useRef();
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: "2500",
      // delay: 300,
    });
    if (imageMe.current) {
      sr.reveal(imageMe.current);
      sr.reveal(mainInfor.current, { origin: "bottom" });
    }
  }, []);

  useEffect(() => {
    const typed = new Typed(infor.current, {
      strings: [
        "I'm Hồ Khả Quý",
        "Font-end Developer",
        "I'm Hue University of Secines",
      ],
      loop: true,
      typeSpeed: 70,
      backSpeed: 30,
      backDelay: 100,
      smartBackspace: false,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container-home">
      <div className="wraper-home">
        <div ref={mainInfor}>
          <h1 className="infor-home" ref={infor}></h1>
          <p className="title-home">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>

        <img src={meImage} alt="me" className="imageMe-home" ref={imageMe} />
      </div>
      <Contact />
      <Skill />
      <Project />
      <Movie />
    </div>
  );
};

export default Home;
