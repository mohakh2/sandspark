import HomeTemplate from "@/components/templates/HomeTemplate";

export default function Home() {
  const heroData = {
    firstLine: "Websites that Work.",
    secondLine: "Ideas that ",
    highlightWord: "Ignite"
  };

  const description = 
    "We design high-impact websites and smart digital tools for small businesses ready to grow. From full sites to custom-built chatbots, we help you connect with your audience and convert clicks into customers.";

  const ctaButtons = [
    {
      label: "See Our Services",
      href: "/services",
      variant: "primary" as const
    },
    {
      label: "Get a Free Quote",
      href: "/contact",
      variant: "secondary" as const
    }
  ];

  const stats = [
    {
      value: "74%",
      label: "of consumers judge\ncredibility by website design"
    },
    {
      value: "56%",
      label: "of businesses\nsee higher ROI after redesign"
    },
    {
      value: "80%",
      label: "higher engagement with AI\nchatbot support"
    }
  ];

  const serviceData = [
    {
      title: "Website Design & Development",
      content: "From landing pages to full-stack platforms, we create sleek, responsive websites tailored to your brand. Whether you need an eCommerce store or a personal portfolio, we've got you covered."
    },
    {
      title: "Ai Chatbots & Assistants",
      content: "Engage visitors, automate support, and drive leads with bots that sound human and work 24/7—perfect for sales, FAQs, or customer support."
    },
    {
      title: "Custom Web Scrapers",
      content: "Need data from websites? Our scrapers can extract information from almost any site reliably, whether for market research, competitor tracking, or analytics."
    },
    {
      title: "OCR Tools",
      content: "Convert scanned documents, images, or handwritten notes into editable, searchable text with our advanced Optical Character Recognition tools."
    }
  ];

  return (
    <HomeTemplate
      heroData={heroData}
      description={description}
      ctaButtons={ctaButtons}
      stats={stats}
      serviceData={serviceData}
    />
  );
}
