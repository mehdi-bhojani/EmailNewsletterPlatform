import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import Toolbar from "./Toolbar";

function Header() {
  return (
    <>
      <header className="w-full sticky top-0 left-0 z-[999] border-b border-b[#000] flex items-center h-[80px] shadow-lg justify-between px-2 sm:px-5 bg-white bg-opacity-95">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div>
          <NavItems />
        </div>
        <div>
          <Toolbar />
        </div>
      </header>
    </>
  );
}

export default Header;
