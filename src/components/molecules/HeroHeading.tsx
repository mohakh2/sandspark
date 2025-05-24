import Image from "next/image";
import spark from "../../../public/spark.svg";
import Heading from "../atoms/Heading";

type HeroHeadingProps = {
  firstLine: string
  secondLine: string
  highlightWord: string
}

export default function HeroHeading({
  firstLine,
  secondLine,
  highlightWord,
}: HeroHeadingProps) {
  return (
    <Heading size="xl" className="text-center">
      {firstLine} <br />
      {secondLine} <span className="text-[var(--text-secondary)] relative">
        <Image 
          className="absolute -top-25 -right-30" 
          src={spark} 
          alt="logo" 
          width={225} 
          height={225} 
        />
        {highlightWord}
      </span>
    </Heading>
  )
} 