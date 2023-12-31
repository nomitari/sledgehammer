import React from "react";
import flower1 from "../../img/flower1.png";
import flower2 from "../../img/flower2.png";
import flower3 from "../../img/flower3.png";
import flower4 from "../../img/flower4.png";
import flower5 from "../../img/flower5.png";

const Flower: React.FC = () => {
  const flowers = [flower1, flower2, flower3, flower4, flower5];
  let spriteSheetURL = flowers[0];
  const flowerBloom = () => {
    const flower = document.getElementById("flower");
    if (!flower) {
      console.log("GHIEFHSIHFL");
      return;
    }
    const totalSpriteSheets = 5;

    // Initialize the flower animation
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;
    let spriteSheetToShow = Math.floor(
      (scrollPercentage / 100) * totalSpriteSheets
    );
    if (spriteSheetToShow > 4) {
      spriteSheetToShow = 4
    }
    const frameWidth = 300;

    console.log(scrollPercentage);
    console.log(spriteSheetToShow);
    // Load the corresponding sprite sheet image
    spriteSheetURL = flowers[spriteSheetToShow];

    // Set the background image
    (flower as any)['src'] = spriteSheetURL;
    // flower.style.backgroundRepeat = "no-repeat";
    console.log(flower);
  };

  window.addEventListener("scroll", flowerBloom);

  return (
    <div id="flower-container">
      <div id="flower-image-container">
      {/* <div id="flower-div"> */}
        <img id="flower" src={spriteSheetURL} />
      </div>
      {/* </div> */}
    </div>
  );
};
export default Flower;
