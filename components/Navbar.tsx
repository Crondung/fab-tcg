import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex fixed top-0 z-50 w-full text-white p-4 justify-evenly text-xl backdrop-blur-xl border-y border-white">
      <Link href={"/yugioh"} className="hover:scale-110">
        Yu-Gi-Oh!
      </Link>
      <div className="h-6 w-px bg-white"></div>
      <Link href={"/pokemon"} className="hover:scale-110">
        Pokémon
      </Link>
      <div className="h-6 w-px bg-white"></div>
      <Link href={"/other"} className="hover:scale-110">
        Other
      </Link>
      <div className="w-1/3"></div>
      <ShoppingCart className="hover:scale-110" />
    </nav>
  );
}
