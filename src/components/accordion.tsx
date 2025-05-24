'use client'
import ServiceAccordion from "./organisms/ServiceAccordion";

export default function Accordion() {
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
        <ServiceAccordion services={serviceData} defaultOpen={1} />
    );
}
