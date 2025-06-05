import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Button from "./atoms/Button";



export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-[var(--background)] shadow-md">
      <div className="flex justify-between items-center  max-w-7xl mx-auto">
        <Link href="/">
          <Image src={logo} alt="logo" width={250} height={250} />
        </Link>
        <div className="flex gap-4">
          <Button variant="navbar" href="#test" className="hover:text-[var(--text-secondary)]">Home</Button>
          <Button variant="navbar" className="hover:text-[var(--text-secondary)]">Services</Button>
          <Button variant="navbar" className="hover:text-[var(--text-secondary)]">Process</Button>
          <Button variant="navbar" className="hover:text-[var(--text-secondary)]">About</Button>
          <Button variant="navbar" className="hover:text-[var(--text-secondary)]">Contact</Button>
        </div>
      </div>
    </div>
  );
}