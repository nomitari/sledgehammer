import React from "react";
import maya from "../img/maya.png";
import nomi from "../img/nomi.png";

const About: React.FC = () => {
  return (
    <section id="about" className="content">
      <h3>WHO WE ARE</h3>
      <div className="about-card">
        <p id="about-bloom">
          Welcome to Bloom, where we blend digital marketing, SEO, and web
          development expertise to optimize your business growth. Our mission is
          to be your trusted right hand, your go-to business partners, and the
          Jill of all trades that your company needs.
          <br />
          <br />
          What sets Bloom apart is our unwavering commitment to your success.
          Expect us to deeply immerse ourselves in your operation's unique goals
          and challenges. By leveraging our extensive knowledge and wide
          expertise, we customize strategies that deliver concrete, tailored
          results. <br />
          <br />
          We believe that true success lies in cultivating meaningful
          relationships with our clients, driven by a genuine passion to learn
          about your business inside and out. Together, we will enable your
          business to bloom into its fullest potential. <br />
          <br />
          Choose Bloom and watch your business flourish, one petal at a time.
        </p>
      </div>
      <div className="about-card">
        <img src={maya} />
        <div id="maya">
          <h5>maya bennett</h5>
          <p>
            Meet Maya, the dynamic co-founder of Bloom. Maya's journey began in
            the field of psychology, where her insatiable curiosity and
            adventurous spirit led her to explore the intersection of people and
            technology. She ventured into a wide variety of domains, during
            which she discovered a strong affinity for data analytics and
            marketing. <br />
            <br />
            Maya's unique background in psychology brings an invaluable
            dimension to Bloom's approach. Her keen understanding of human
            behavior and motivations enables her to develop customer-centric
            strategies that resonate deeply with any audience. <br />
            <br />
            Eager, energetic, and brimming with ideas, Maya thrives on embracing
            new challenges. No project is too daunting, and she approaches each
            task determined to deliver excellence. <br />
            <br />
            Beyond her technical expertise, Maya's warm and approachable
            demeanor fosters a strong rapport with clients. She actively seeks
            feedback, listens attentively to your needs, and consistently looks
            for ways to go above and beyond your expectations.
            <br />
            <br /> With Maya by your side, you'll not only receive exceptional
            service but also a genuine partnership rooted in care and
            dedication.
          </p>
        </div>
      </div>
      <div className="about-card">
        <div id="nomi">
          <h5>nomi tari</h5>
          <p>
            Meet Nomi, the visionary co-founder of Bloom. Nomi has worked with
            digital marketing, programming, and web development since her
            undergraduate years studying Computer Science. Fueled by her
            insatiable curiosity and determination, she immersed herself in
            programming and web developmen.
            <br />
            <br /> Nomi has an innate passion for her craft and a boundless
            drive to excel, and her commitment to staying ahead of the curve
            ensures that Bloom remains at the forefront of innovation. <br />
            <br />
            Alongside her technical brilliance, Nomi brings a unique charm that
            makes her an absolute joy to work with. Her fun-loving and
            lighthearted nature adds a sincere touch to every project she
            undertakes. Nomi's approach is level-headed and logical, and in the
            dynamic world of business, her calm demeanor is an invaluable asset.
            <br />
            <br />
            Nomi's ability to see the bigger picture and account for intricate
            details facilitates holistic strategies that will drive your
            business to outstanding success.
          </p>
        </div>
        <img src={nomi} />
      </div>
    </section>
  );
};

export default About;
