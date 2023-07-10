import React, { useEffect, useState } from "react";

interface Props {}

interface Service {
  title: string;
  description: string[];
}

const marketingTiles = [`One`, `Two`, `Three`, `Four`, `Five`, `Six`];
const crmTiles = [`One`, `Two`, `Three`, `Four`, `Five`, `Six`];
const socialMediaTiles = [`One`, `Two`, `Three`, `Four`, `Five`, `Six`];
const adminSupportTiles = [`One`, `Two`, `Three`, `Four`, `Five`, `Six`];
const webDesignTiles = [`One`, `Two`, `Three`, `Four`, `Five`, `Six`];

const lifecycles: Service[] = [
  // {
  //   title: "Marketing & SEO",
  //   description: marketingTiles// `Social Media Advertising (Google Ads, Facebook Ads, Instagram Ads, Pinterest Ads) Hashtag Creation and Keyword Optimization\nContent Marketing Strategies\nSearch Engine Optimization (SEO) Services\nConversion Rate Optimization (CRO)\nInfluencer Marketing`,
  // },
  // {
  //   title: "Client Relations Management",
  //   description: crmTiles
  //     //"Newsletter Creation and Management\n\nCustomer Relationship Management (CRM) System Setup and Integration\nEmail Campaigns and Automation\nCustomer Segmentation and Personalization\nLead Nurturing and Follow-up — Maya Bennett",
  // },
  // {
  //   title: "Social Media Management",
  //   description: socialMediaTiles
  //     //"Content Creation and Curation\nSocial Media Strategy and Planning\nCommunity Engagement and Interactions\nSocial Media Analytics and Reporting\nInfluencer Relationship Management — Maya Bennett.",
  // },
  // {
  //   title: "Administrative Support",
  //   description: adminSupportTiles
  //     //"Calendar Management and Scheduling\nVirtual Assistant Services\nData Entry and Documentation\nCustomer Support and Helpdesk — Maya Bennett",
  // },
  // {
  //   title: "Web Design",
  //   description: webDesignTiles
  //     //"Custom Website Development\nUser Experience (UX) Design\nResponsive and Mobile-Friendly Design\nE-commerce Solutions\nWebsite Maintenance and Updates — Maya Bennett",
  // },
  {
    title: "",
    description: [],
  },
  {
    title: "",
    description: [],
  },
  {
    title: "",
    description: [],
  },
];

const Lifecycles: React.FC<Props> = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(false);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const updateDark = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;

    if (scrollPercentage > 53 && scrollPercentage < 90) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("inverted-body");
    } else {
      document.body.classList.remove("inverted-body");
    }
  }, [isDark]);

  window.addEventListener("scroll", updateDark);

  return (
    <section id="services">
      <h3>LIFECYCLES</h3>
      <div className="services-container">
        {lifecycles.map((lifecycle, index) => (
          <div
            key={index}
            onClick={() => handleToggle(index)}
            className={activeIndex === index ? "active" : ""}
          >
            <h4>{lifecycle.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lifecycles;
