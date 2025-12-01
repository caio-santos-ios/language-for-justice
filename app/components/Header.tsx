"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow z-50 header-app">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <Logo />
        </Link>

        <button
          className="hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <ul className={`md:flex gap-8 font-medium transition-all ${open ? "block" : "hidden"}`}>
          <li><a href="#inicio" className="">Início</a></li>
          <li><a href="#sobre" className="">[SEÇÃO 1]</a></li>
          <li><a href="#servicos" className="">[SEÇÃO 2]</a></li>
          <li><a href="#contato" className="">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}