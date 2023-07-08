import React from "react";
import Slider from "react-slick";

const images = [
  {
    url: `./src/img/purple.jpeg`,
    id: 1,
  },
];

const Slideshow: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <section className="slideshow">
        {/* <Slider {...settings}> */}
        <div id="fuckingShitAssPicture"></div>
      </section>
    </div>
  );
};

{
  /* {images.map((pic) => {
            return (
              <div key={pic.id} className="slideshow-pics">
                <img src={pic.url}></img>
              </div> */
}

export default Slideshow;
