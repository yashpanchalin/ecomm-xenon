import React from "react";
import Link from "next/link";
import Menu from "./MobileMenu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const NavBar = () => {
  return (
    <div className=" h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      {/*MOBILE*/}
      <div className="md:hidden h-full flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl tracking-tighter">xenon</div>
        </Link>
        <Menu />
      </div>
      {/*DESKTOP*/}
      <div className="hidden md:flex items-center justify-between gap-4 h-full">
        {/*LEFT*/}
        <div className=" sm:w-1/3 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <Image src="/icon.png" alt="" width={32} height={32} />
            <div className="text-2xl tracking-tighter">xenon</div>
          </Link>
          <SearchBar />
        </div>
        {/*RIGHT*/}
        <div className="md:auto lg:w-auto xl:w-auto flex items-center justify-between gap-4">
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
