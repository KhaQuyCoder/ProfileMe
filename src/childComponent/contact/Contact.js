import React, { useRef, useEffect } from "react";
import "./Contact.css";
import ScrollReveal from "scrollreveal";
import "../../reponsive/Reponsive.css";
const Contact = () => {
  const githup = useRef();
  const facebook = useRef();
  const tiktok = useRef();
  const email = useRef();
  const title = useRef();

  const contact = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png",
      link: "https://www.facebook.com/profile.php?id=100011488594323",
      alt: "facebook",
      ref: facebook,
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      link: "https://github.com/KhaQuyCoder",
      alt: "git",
      ref: githup,
    },
    {
      src: "https://cdn.pixabay.com/photo/2022/02/09/08/35/tiktok-7002882_960_720.png",
      link: "https://www.tiktok.com/@khaquy2209",
      alt: "tiktok",
      ref: tiktok,
    },
    {
      src: "https://static.vecteezy.com/system/resources/thumbnails/014/440/980/small_2x/email-message-icon-design-in-blue-circle-png.png",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=22t1020721@husc.edu.vn&su=Contact%20from%20Website&body=Hello%20Kha%20Quy,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.",
      alt: "email",
      ref: email,
    },
  ];
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: "2500",
      // delay: 300,
    });
    if (githup.current) {
      sr.reveal(githup.current, { origin: "bottom", delay: 800 });
      sr.reveal(tiktok.current, { origin: "bottom", delay: 800 });
      sr.reveal(facebook.current, { origin: "bottom", delay: 800 });
      sr.reveal(email.current, { origin: "bottom", delay: 800 });
      sr.reveal(title.current, { origin: "left" });
    }
  }, []);
  return (
    <div className="container-contact">
      <h1 ref={title}>Contact</h1>
      <div className="wraper-contact">
        {contact.map((item, index) => (
          <a className="a-contact" key={index} href={item.link}>
            <img
              className="image-contact"
              src={item.src}
              alt={item.alt}
              ref={item.ref}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
