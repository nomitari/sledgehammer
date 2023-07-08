import React from "react";
import Slider from "react-slick";
import slide1 from "../img/slide0.jpg";
import slide2 from "../img/slide1.webp";
import slide3 from "../img/slide2.jpg";
import slide4 from "../img/slide3.gif";
import slide5 from "../img/slide4.jpg";

const Slideshow: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <section className="slideshow">
      <Slider {...settings}>
        <div className="fuckingShitAssPicture">
          <img src={slide1} alt="flowers" />
        </div>
        <div className="fuckingShitAssPicture">
          <img src={slide2} alt="flowers" />
        </div>
        <div className="fuckingShitAssPicture">
          <img src={slide3} alt="flowers" />
        </div>
        <div className="fuckingShitAssPicture">
          <img src={slide4} alt="flowers" />
        </div>
        <div className="fuckingShitAssPicture">
          <img src={slide5} alt="flowers" />
        </div>
      </Slider>
    </section>
  );
};

export default Slideshow;
