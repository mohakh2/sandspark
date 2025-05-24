import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";

type NavbarProps = {
  onHomeClick: () => void;
  onServicesClick: () => void;
  onProcessClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}

export default function Navbar({ onHomeClick, onServicesClick, onProcessClick, onAboutClick, onContactClick }: NavbarProps) {
  return (
    <div className="sticky top-0 z-50 bg-[var(--background)] shadow-md">
      <div className="flex justify-between items-center  max-w-7xl mx-auto">
        <Link href="/">
          <Image src={logo} alt="logo" width={250} height={250} />
        </Link>
        <div className="flex gap-4">
          <button onClick={onHomeClick} className="hover:text-[var(--text-secondary)]">Home</button>
          <button onClick={onServicesClick} className="hover:text-[var(--text-secondary)]">Services</button>
          <button onClick={onProcessClick} className="hover:text-[var(--text-secondary)]">Process</button>
          <button onClick={onAboutClick} className="hover:text-[var(--text-secondary)]">About</button>
          <button onClick={onContactClick} className="hover:text-[var(--text-secondary)]">Contact</button>
        </div>
      </div>
    </div>
  );
}