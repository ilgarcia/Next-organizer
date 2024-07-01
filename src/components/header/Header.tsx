"use client";

import { useState } from "react";
import { Turtle } from "lucide-react";

import Hamburger from "./Hamburger";
import { Button } from "../ui/button";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav
        className={`relative flex flex-col items-start justify-center bg-slate-200 h-screen w-fit`}
      >
      <Hamburger toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        <Button asChild className="m-1">
          <Link href="/">
            <Turtle />
            <span className={`${!isOpen && "hidden"} ml-2`}>Turtle</span>
          </Link>
        </Button>
      </nav>
    </header>
  );
}

export default Header;
