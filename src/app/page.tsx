import spark from "../../public/spark.svg";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen">
      <p className="font-bold text-[var(--text-primary)] text-8xl">
        Websites that Work. <br />
        Ideas that <span className="text-[var(--text-secondary)] relative">
          <Image 
            className="absolute -top-25 -right-30" 
            src={spark} 
            alt="logo" 
            width={225} 
            height={225} 
          />
          Ignite
        </span>
      </p>
      <p className="text-black text-2xl max-w-2xl">
        We design high-impact websites and smart digital tools for small businesses 
        ready to grow. From full sites to <br/> custom-built chatbots, we help you connect 
        with your audience and convert clicks into customers.
      </p>
      <div className="flex gap-4">
        <a href="/services" className="bg-[var(--button-primary)] text-white px-4 py-2 rounded-md  hover:text-decoration-line:none">See Our Services</a>
        <a href="/contact" className="bg-[var(--button-secondary)] text-white px-4 py-2 rounded-md  hover:text-decoration-line:none">Get a Free Quote</a>
      </div>
      <div className="w-full h-[200px] bg-[var(--button-secondary)] my-8 flex justify-between items-center px-20">
      <div className="flex items-center ">
      <span className="text-white text-7xl font-bold">74%</span>
        <span className="text-white text-2xl font-bold text-left">
          of consumers judge<br/>credibility by website design
        </span>
      </div>
      <div className="flex items-center ">
      <span className="text-white text-7xl font-bold">56%</span>
        <span className="text-white text-2xl font-bold text-left">
          of businesses<br/>see higher ROI after redesign
        </span>
      </div>
      <div className="flex items-center ">
      <span className="text-white text-7xl font-bold">80%</span>
        <span className="text-white text-2xl font-bold text-left">
          higher engagement with AI<br/>chatbot support
        </span>
      </div>
      </div>
    </div>
  );
}
