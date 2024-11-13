import React, { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Project.css";
import "../../reponsive/Reponsive.css";
const Project = () => {
  const title = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();

  const projects = [
    {
      src: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/2e427ce7-b2f7-4c9a-a79b-8c473fadcb55/bfbc3beb-7902-41e6-b139-e6110c8c7983.png",
      technology: "HTML, Css, Javascript, ReactJs",
      react: [
        "Quản lý components bằng function component",
        "Fetch API bằng thư viện axios",
        "Chuyển trang bằng react router dom",
        "Quản lý state bằng useContext",
        "Tích hợp Bootstrap vào 1 số UI",
        "Kỷ thuật reponsive thích hợp mọi thiết bị",
      ],
      ref: projectOne,
      state: true,
    },
    {
      src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/e-commerce-logo-design-template-5dcf2e4daab6379d4824c6dc04e26f17_screen.jpg?ts=1645336764",
      technology: "HTML, Css, Javascript, ReactJs, Bootstrap",
      react: [],
      state: false,
      ref: projectTwo,
    },
  ];
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: "2500",
      // delay: 300,
    });

    sr.reveal(title.current, { origin: "left" });
    sr.reveal(projectOne.current, { origin: "left", delay: 300 });
    sr.reveal(projectTwo.current, { origin: "right", delay: 300 });
  }, []);
  return (
    <div className="container-project">
      <h1 style={{ marginTop: "70px" }} ref={title}>
        Projects
      </h1>
      <div className="wraper-project">
        {projects.map((item, index) => (
          <div className="item-project" key={index} ref={item.ref}>
            <img className="image-project" src={item.src} />
            <div>
              <p style={{ fontWeight: 500, marginTop: "10px" }}>
                {item.technology}
              </p>
              <p className="tech-project">
                {item.react.map((node, j) => (
                  <li className="node-project">{node}</li>
                ))}
              </p>
              <p>{item.state ? "" : "Coming soon..."}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
