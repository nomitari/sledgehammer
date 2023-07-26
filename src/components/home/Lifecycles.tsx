import React, { useState } from "react";

interface Props {}

interface Lifecycle {
  title: string;
  description: string;
}

// const marketingTiles = [`One`, `Two`, `Three`, `Four`, `Five`, `Six`];
// const crmTiles = [`One`, `Two`, `Three`, `Four`, `Five`, `Six`];
// const socialMediaTiles = [`One`, `Two`, `Three`, `Four`, `Five`, `Six`];
// const adminSupportTiles = [`One`, `Two`, `Three`, `Four`, `Five`, `Six`];
// const webDesignTiles = [`One`, `Two`, `Three`, `Four`, `Five`, `Six`];

const lifecycles: Lifecycle[] = [
  {
    title: "Digital Marketing Strategies",
    description:
      "Together, we'll plant the seeds of success with tailored, data-driven strategies, preparing your business for a prosperous bloom.",
  },
  {
    title: "Content Marketing",
    description:
      "Position yourself as a trusted authority in your field, cultivating thought-provoking and relevant content that resonates with your audience.",
  },
  {
    title: "SEO and Conversion Optimization",
    description:
      "Propel your visibility and maximize conversions with our expert SEO, ensuring your online presence blossoms to its full potential.",
  },
  {
    title: "CRM/Email Management",
    description:
      "Nurture enduring customer relationships with personalized email campaigns and strategic lead cultivation, allowing your customer base to grow and thrive.",
  },
  {
    title: "Web Development",
    description:
      "With us, create a flourishing online space combining intuitive design and seamless functionality, providing an engaging digital experience to captivate your audience.",
  },
];

const Lifecycles: React.FC<Props> = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="lifecycles">
      <div className="lifecycles-container">
        {lifecycles.map((lifecycle) => (
          <div className="lifecycle">
            <div className="lifecycle-title">
              <h4>{lifecycle.title}</h4>
              <a href="./../services" className="learn-more-button cta-link">learn more ›»</a>
            </div>
            <div className="lifecycle-description">
              <p>{lifecycle.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lifecycles;
