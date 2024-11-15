import React, { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Movie.css";
import "../../reponsive/Reponsive.css";
const Movie = () => {
  const one = useRef();
  const two = useRef();
  const three = useRef();
  const forn = useRef();
  const fire = useRef();
  const trailer = useRef();
  const description = useRef();
  const btn = useRef();

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: "2500",
      // delay: 300,
    });

    sr.reveal(one.current, { origin: "right", delay: 200 });
    sr.reveal(trailer.current, { origin: "left", delay: 200 });
    sr.reveal(description.current, { origin: "bottom", delay: 200 });
    sr.reveal(btn.current, { origin: "bottom", delay: 2000 });
    sr.reveal(two.current, { origin: "right", delay: 600 });
    sr.reveal(three.current, { origin: "right", delay: 1000 });
    sr.reveal(forn.current, { origin: "right", delay: 1400 });
    sr.reveal(fire.current, { origin: "right", delay: 1800 });
  }, []);
  return (
    <div className="container-movie">
      <h1 style={{ marginTop: "50px" }}>Favotire movie</h1>
      <div className="main-movie">
        <div className="trailer-movie">
          <iframe
            ref={trailer}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/X3-YcNpjwkE?si=U9SBUtA71ve2J9u0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p ref={description} className="title-movie">
            Đấu Phá Thương Khung kể về một thế giới thuộc về Đấu Khí, không hề
            có ma pháp hoa tiếu diễm lệ, chỉ có đấu khí cương mãnh phồn thịnh!
            Đấu Phá Thương Khung cũng là nơi mà các Luyện Dược Sư, những nhà
            luyện đan dược giúp tăng cấp tu luyện, phục hồi sức lực, hay thậm
            chí cửu tử hoàn sinh vô cùng được trọng vọng bởi tư chất hiếm có của
            họ. Tưởng tượng thế giới đó sẽ phát triển ra sao? Mời các bạn xem
            Đấu Phá Thương Khung! Hệ Thống Tu Luyện: Đấu Giả, Đấu Sư, Đại Đấu
            Sư, Đấu Linh, Đấu Vương, Đấu Hoàng, Đấu Tông, Đấu Tôn, Đấu Thánh,
            Đấu Đế. Hãy Bắt Đầu Từ Tiêu Viêm – một thiên tài tu luyện trong phút
            chốc trở thành phế vật, từ phế vật lại từng bước khẳng định lại
            chính mình! Trên bước đường từng bước khẳng định lại bản thân, trở
            thành một cao thủ siêu hạng, cũng như một Luyện Dược Sư đỉnh cao,
            Tiêu Viêm được một vị tôn sư bí mật có thân phận cùng năng lực cực
            cao không ngừng chỉ dạy.
          </p>
          <a
            href="https://hhtq.xyz/thong-tin-phim/dau-pha-thuong-khung-phan-5.html"
            ref={btn}
          >
            <button className="btn-movie">Xem ngay</button>
          </a>
        </div>

        <div className="wraper-movie">
          <img
            className="image-movie"
            src="https://i.pinimg.com/736x/81/9e/fd/819efd1200a098bc743b69c475373dcb.jpg"
            alt="mydotoa"
            ref={one}
          />
          <img
            className="image-movie"
            src="https://i.pinimg.com/736x/26/79/86/2679860c4c6d9e779189a045ea9dc92a.jpg"
            alt="ytien"
            ref={two}
          />
          <img
            className="image-movie"
            src="https://i.pinimg.com/736x/52/92/67/5292678a74841f5a166a4af862f0cd2c.jpg"
            alt="tienviem"
            ref={three}
          />
          <img
            className="image-movie"
            src="https://i.pinimg.com/736x/0f/d8/cc/0fd8cc82dd3612b00940d8e9a416e101.jpg"
            alt="huannhi"
            ref={forn}
          />
          <img
            className="image-movie"
            src="https://i.pinimg.com/736x/9a/f8/d1/9af8d185466799fdbd28e8cb8e363d1b.jpg"
            alt="taodinh"
            ref={fire}
          />
        </div>
      </div>
    </div>
  );
};

export default Movie;
