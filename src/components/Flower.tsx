const Flower: React.FC = () => {
  const flowerBloom = () => {
    const flower = document.getElementById("flower");
    if (!flower) {
      console.log("GHIEFHSIHFL");
      return;
    }
    const totalSpriteSheets = 7;

    // Initialize the flower animation
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;
    const spriteSheetToShow = Math.floor(
      (scrollPercentage / 100) * totalSpriteSheets
    );
    const frameWidth = 300; // Adjust this based on the width of each frame in your sprite sheet

    console.log(scrollPercentage);
    console.log(spriteSheetToShow);
    // Load the corresponding sprite sheet image
    const spriteSheetURL = `../img/flower${spriteSheetToShow + 1}.png`;

    // Calculate the background position based on the sprite sheet and scroll percentage
    const backgroundPositionX = -frameWidth * spriteSheetToShow;

    // Set the background image and position
    flower.style.backgroundImage = `url(\"${spriteSheetURL}\")`;
    flower.style.backgroundPosition = `${backgroundPositionX}px 0`;
    console.log(flower);

  };

  window.addEventListener("scroll", flowerBloom)

  return <div id="flower"></div>;
};
export default Flower;
