import React, { useState } from "react";

interface Props {}

interface Service {
  title: string;
  description: string[];
}

const marketingTiles = [
    `One`,
    `Two`,
    `Three`,
    `Four`,
    `Five`,
    `Six`,
  ];
  const crmTiles = [
    `One`,
    `Two`,
    `Three`,
    `Four`,
    `Five`,
    `Six`,
  ];
  const socialMediaTiles = [
    `One`,
    `Two`,
    `Three`,
    `Four`,
    `Five`,
    `Six`,
  ];
  const adminSupportTiles = [
    `One`,
    `Two`,
    `Three`,
    `Four`,
    `Five`,
    `Six`,
  ];
  const webDesignTiles = [
    `One`,
    `Two`,
    `Three`,
    `Four`,
    `Five`,
    `Six`,
  ];


const services: Service[] = [
  {
    title: "Marketing & SEO",
    description: marketingTiles// `Social Media Advertising (Google Ads, Facebook Ads, Instagram Ads, Pinterest Ads) Hashtag Creation and Keyword Optimization\nContent Marketing Strategies\nSearch Engine Optimization (SEO) Services\nConversion Rate Optimization (CRO)\nInfluencer Marketing`,
  },
  {
    title: "Client Relations Management",
    description: crmTiles
      //"Newsletter Creation and Management\n\nCustomer Relationship Management (CRM) System Setup and Integration\nEmail Campaigns and Automation\nCustomer Segmentation and Personalization\nLead Nurturing and Follow-up — Maya Bennett",
  },
  {
    title: "Social Media Management",
    description: socialMediaTiles
      //"Content Creation and Curation\nSocial Media Strategy and Planning\nCommunity Engagement and Interactions\nSocial Media Analytics and Reporting\nInfluencer Relationship Management — Maya Bennett.",
  },
  {
    title: "Administrative Support",
    description: adminSupportTiles
      //"Calendar Management and Scheduling\nVirtual Assistant Services\nData Entry and Documentation\nCustomer Support and Helpdesk — Maya Bennett",
  },
  {
    title: "Web Design",
    description: webDesignTiles
      //"Custom Website Development\nUser Experience (UX) Design\nResponsive and Mobile-Friendly Design\nE-commerce Solutions\nWebsite Maintenance and Updates — Maya Bennett",
  },
];

const Services: React.FC<Props> = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="services">
      <h2>What we do</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => handleToggle(index)}
            className={activeIndex === index ? "active" : ""}
          >
            <h3>{service.title}</h3>
            <div className="service-description">{service.description.map(tile => {
                return <p>{tile}</p>
            })}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
