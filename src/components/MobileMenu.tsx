"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function MbobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="">
        <Menu onClick={() => setMenuOpen((prev) => !prev)} />
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full h-[calc(100vh-65vh)] bg-gray-100 px-4 py-2 flex flex-col items-start justify-start gap-4 text-xl z-10">
            <Link href="">Wishlist</Link>
            <Link href="">Cart</Link>
            <Link href="">Profile</Link>
            <Link href="">Login</Link>
            <Link href="">Signout</Link>
          </div>
        )}
      </div>
    </>
  );
}
