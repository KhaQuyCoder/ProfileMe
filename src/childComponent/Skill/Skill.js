import React, { useRef, useEffect } from "react";
import "./Skill.css";
import ScrollReveal from "scrollreveal";
import "../../reponsive/Reponsive.css";

const Skill = () => {
  const html = useRef();
  const css = useRef();
  const js = useRef();
  const git = useRef();
  const bootstrap = useRef();
  const reactjs = useRef();
  const skill = useRef();

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: "2500",
      // delay: 300,
    });
    if (html.current) {
      sr.reveal(skill.current, { origin: "left" });
      sr.reveal(html.current, { delay: 1000 });
      sr.reveal(css.current, { origin: "bottom", delay: 800 });
      sr.reveal(js.current, { delay: 800 });
      sr.reveal(reactjs.current, { origin: "bottom", delay: 800 });
      sr.reveal(git.current, { delay: 800 });
      sr.reveal(bootstrap.current, { origin: "bottom", delay: 800 });
    }
  }, []);
  return (
    <div className="container-skill">
      <h1 style={{ marginLeft: "20px" }} ref={skill}>
        Skills
      </h1>
      <div className="wraper-skill">
        <li>
          <img
            ref={html}
            className="image-skill"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG053fSK6lEaRgkWQJU74L7F6Wh_YMOWsAfQ&s"
            alt=""
          />
        </li>
        <li className="image-skill">
          <img
            ref={css}
            className="image-skill"
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png"
            alt=""
          />
        </li>
        <li className="image-skill">
          <img
            ref={js}
            className="image-skill"
            src="https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png"
            alt=""
          />
        </li>
        <li className="image-skill">
          <img
            ref={reactjs}
            className="image-skill"
            src="https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png"
            alt=""
          />
        </li>
        <li className="image-skill">
          <img
            ref={git}
            className="image-skill"
            src="https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png"
            alt=""
          />
        </li>
        <li className="image-skill">
          <img
            ref={bootstrap}
            className="image-skill"
            src="https://e7.pngegg.com/pngimages/718/753/png-clipart-bootstrap-css3-node-js-logo-github-purple-violet.png"
          />{" "}
        </li>
      </div>
    </div>
  );
};

export default Skill;
