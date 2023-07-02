import React from "react";

const About: React.FC = () => {
  return (
    <section id="about">
      <h2>Who we are</h2>
      <div className="about-card">
        <img src={require("../img/maya.png")} />
        <div id="maya">
          <h4>MAYA BENNETT</h4>
          <p>
            Sed rutrum urna mi, et sagittis est lacinia sed. Pellentesque mattis
            vel lectus id gravida. Maecenas et justo ligula. Cras eleifend erat
            maximus vehicula efficitur. Praesent sit amet fermentum risus.
            Aenean ultricies nunc vel nisl dapibus, gravida vulputate ex
            posuere.
          </p>
        </div>
      </div>
      <div className="about-card">
        <div id="nomi">
          <h4>NOMI TARI</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tempor ut erat eget consectetur. Donec sagittis sodales felis, nec
            pretium justo lacinia quis. Nam tempor viverra nisl non euismod.
            Phasellus egestas porta accumsan.
          </p>
        </div>
        <img src={require("../img/nomi.png")} />
      </div>
    </section>
  );
};

export default About;
