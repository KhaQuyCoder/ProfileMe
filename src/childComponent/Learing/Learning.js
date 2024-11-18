import React, { useRef, useEffect, useContext } from "react";
import ScrollReveal from "scrollreveal";
import "./Learning.css";
import "../../reponsive/Reponsive.css";
import { myContext } from "../../State/Context";
const Learning = () => {
  const titleLearning = useRef();
  const th = useRef();
  const cs = useRef();
  const pt = useRef();
  const dh = useRef();
  const main = useRef();
  const { status } = useContext(myContext);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: "2500",
      // delay: 300,
    });

    sr.reveal(titleLearning.current, { origin: "left" });
    sr.reveal(th.current, { origin: "right" });
    sr.reveal(cs.current, { origin: "left", delay: 300 });
    sr.reveal(pt.current, { origin: "right", delay: 600 });
    sr.reveal(dh.current, { origin: "left", delay: 900 });
    sr.reveal(main.current, { origin: "bottom" });
  }, []);

  const datas = [
    {
      class: "th-learnning",
      classChild: "th-content-learning",
      href: "https://www.facebook.com/profile.php?id=61565158294176",
      content: "Trường tiểu học Hương Vân",
      ref: th,
    },
    {
      class: "cs-learnning",
      classChild: "cs-content-learning",
      href: "https://www.facebook.com/thcsnguyenkhoadang",
      content: " Trường trung học cơ sở Nguyễn Khoa Đăng",
      ref: cs,
    },
    {
      class: "pt-learnning",
      classChild: "pt-content-learning",
      href: "https://www.facebook.com/thpthuongtrathuathienhue",
      content: "Trường trung học phổ thông Hương Trà",
      ref: pt,
    },
    {
      class: "dh-learnning",
      classChild: "dh-content-learning",
      href: "https://www.facebook.com/@husc.edu.vn/",
      content: "Đại học Khoa Học - Đại học Huế",
      ref: dh,
    },
  ];
  return (
    <div className="container-learning">
      <h1 style={{ marginTop: "100px" }} ref={titleLearning}>
        Học tập
      </h1>
      <div className="wraper-learning">
        <div className="main-learnning" ref={main}>
          <div className="th-learnning"></div>
          {datas.map((item, index) => (
            <div className={item.class} key={index}>
              <div
                className={item.classChild}
                ref={item.ref}
                style={
                  status ? { backgroundColor: "black", color: "#fff" } : {}
                }
              >
                <a
                  href={item.href}
                  style={status ? { color: "#fff" } : { color: "black" }}
                >
                  {item.content}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learning;
