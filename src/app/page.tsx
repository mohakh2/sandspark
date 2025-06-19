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

  const featureData = {
    title: "Why Businesses Choose SandSpark",
    features: [
      {
        icon: "/globe.svg",
        title: "Tailored Web Solutions",
        description: "We don't believe in cookie-cutter sites. Every website and chatbot is custom-built to engage your audience and drive real results."
      },
      {
        icon: "/sparky.svg",
        title: "Smart Automation, Real Conversations",
        description: "From digital assistants to intelligent OCR tools, we bring automation to life — making your business more responsive, efficient, and customer-focused."
      },
      {
        icon: "/rocket.svg",
        title: "Built for Growth, Designed to Last",
        description: "We create digital experiences that scale with you — so you can focus on growing your business, not outgrowing your technology."
      }
    ]
  };

  const howItWorksData = {
    title: "How it Works",
    subtitle: "From Idea to Launch—Here's How We Do It",
    steps: [
      {
        number: 1,
        title: "Discover",
        description: "We get to know your business, goals, and audience."
      },
      {
        number: 2,
        title: "Design",
        description: "Wireframes, mockups, and prototypes tailored to your brand."
      },
      {
        number: 3,
        title: "Develop",
        description: "Clean, responsive code with SEO and performance in mind."
      },
      {
        number: 4,
        title: "Launch & Support",
        description: "We don't just ship—we stick around to help."
      }
    ]
  };

  return (
    <HomeTemplate
      featureData={featureData}
      heroData={heroData}
      description={description}
      ctaButtons={ctaButtons}
      stats={stats}
      serviceData={serviceData}
      howItWorksData={howItWorksData}
    />
  );
}
