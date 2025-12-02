"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import "./Header.css";
import { FiAlignRight, FiX } from "react-icons/fi";
import { atom, useAtom } from "jotai";
import { menuAtom } from "@/src/jotai/menu.jotai";
import { TMenu } from "@/src/types/menu.type";
import { languageAtom } from "@/src/jotai/language.jotai";
import { TLanguage } from "@/src/types/language.type";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [menu] = useAtom<TMenu[]>(menuAtom);
  const [language, setLanguage] = useAtom<TLanguage>(languageAtom)
  const [languageHeader, setLanguageHeader] = useState<string>("0;en");
    
  useEffect(() => {
    const [code, description] = languageHeader.split(";");
    
    const newLanguage: TLanguage = {
      code: parseInt(code),
      description
    };
    setLanguage(newLanguage);
  }, [languageHeader])

  return (
    <>
      <header className="w-full fixed top-0 left-0 bg-white shadow z-50 header-app text-2xl md:text-xl">
        <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <Link href="/">
            <Logo width={90} height={90}/>
          </Link>

          <div onClick={() => setOpen(!open)} className="md:hidden">
            <FiAlignRight fontSize={30} />
          </div>

          <ul className={`md:flex gap-8 font-medium transition-all ${open ? "list-menu-open" : "list-menu"}`}>
            <div onClick={() => setOpen(!open)} className="md:hidden mb-4">
              <FiX fontSize={30} />
            </div>

            {menu.map((x: TMenu, index: number) => (
              <li onClick={() => setOpen(!open)} key={index}> 
                <a href={`#section${index + 1}`}>{x.description[language.code]}</a>
              </li>
            ))}

            <select value={languageHeader} onChange={(e) => setLanguageHeader(e.target.value)} name="language" id="language" className="border rounded-lg px-2 py-1 bg-white text-gray-700 language">
              <option value="0;en">🇺🇸 Inglês</option>
              <option value="1;es">🇪🇸 Espanhol</option>
              <option value="2;pt">🇧🇷 Português</option>
            </select>
          </ul>
        </nav>
      </header>
    </>
  );
}