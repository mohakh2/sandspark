'use client'
import { useState } from "react"

export default function Accordion() {
    const [selected, setSelected] = useState<number | null>(1) // Opens second section by default

    const data = [
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
    ]

    const toggle = (index: number) => {
        setSelected(selected === index ? null : index)
    }

    return (
        <div className=" text-black font-sans p-6 max-w-xl mx-auto rounded-md">
            {data.map((item, index) => (
                <div key={index} className="border-t-2 border-black py-3">
                    <div
                        onClick={() => toggle(index)}
                        className="flex items-center gap-2 cursor-pointer text-lg font-semibold"
                    >
                        <span className="text-xl">{selected === index ? "–" : "+"}</span>
                        {item.title}
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            selected === index ? 'max-h-40 mt-2' : 'max-h-0'
                        }`}
                    >
                        <p className="text-base font-normal">
                            {item.content}
                        </p>
                    </div>
                </div>
            ))}
            <div className="border-t-2 border-black mt-4 pt-4 flex items-center justify-between text-sm">
                <span>Use our Chatbot to find out more about SandSpark!</span>
                <span className="text-xl">→</span>
            </div>
        </div>
    )
}
