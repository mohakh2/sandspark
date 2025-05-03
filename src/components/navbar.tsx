import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4">
        <Link href="/">
        <Image src={logo} alt="logo" width={250} height={250} />
        </Link>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/Services">Services</Link>
        <Link href="/Process">Process</Link>
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link>
      </div>
    </div>
  );
}