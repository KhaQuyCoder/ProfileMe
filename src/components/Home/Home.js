import React, { useEffect, useRef } from "react";
import meImage from "../../assets/image/AnhBonTrap.jpg";
import "./Home.css";
import Skill from "../../childComponent/Skill/Skill";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
import Project from "../../childComponent/projects/Project";
import Contact from "../../childComponent/contact/Contact";
import Movie from "../../childComponent/movie/Movie";
import Infor from "../Infor/Infor";
import "../../reponsive/Reponsive.css";
import Learning from "../../childComponent/Learing/Learning";
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
        "I'm Student",
        "I'm a third years at Hue University of Science",
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
            Chào các bạn. Mình là Hồ Khả Quý, mình đến từ thành phố Huế. Hiện
            đang là sinh viên năm thứ ba tại Đại học Khoa Học - Đại học Huế,
            khoa công nghệ thông tin, chuyên ngành công nghệ phần mềm. Đây là
            website chứa thông tin cá nhân của mình cũng như các nền tảng xã hội
            mình hay dùng và là nơi lưu trữ 1 số dự án mình làm...
          </p>

          <p className="title-home">
            <span style={{ fontSize: "1.3rem", color: "green" }}> &#9752;</span>
            Thất bại không có nghĩa là bạn không cố gắng - Mong bạn đừng bao giờ
            bỏ cuộc trên con đường thực hiện ước mơ của mình.{" "}
            <span style={{ fontSize: "1.3rem", color: "red" }}>
              &#9829; &#9829;
            </span>
          </p>
        </div>

        <img src={meImage} alt="me" className="imageMe-home" ref={imageMe} />
      </div>
      <Contact />
      <Learning />
      <Skill />
      <Project />
      <Movie />
      <Infor />
    </div>
  );
};

export default Home;
