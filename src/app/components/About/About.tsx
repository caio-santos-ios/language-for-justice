"use client";

import { languageAtom } from "@/src/jotai/language.jotai";
import { useAtom } from "jotai";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [language] = useAtom(languageAtom);
  const [title] = useState<string[]>([
    'About Us', 
    'sobre Nosotros', 
    'Sobre Nós', 
  ]);
  
  const [paragraph] = useState<string[]>([
    'Language for Justice (L4J) is a grassroots decolonial and countercolonial communication initiative, driven by and for interpreters, translators, and language professionals from marginalized communities. We firmly believe that language should be a bridge, not a barrier.', 
    'Lenguaje por la Justicia (L4J) es una iniciativa comunitaria de comunicación descolonial y contracolonial, impulsada por y para intérpretes, traductores y profesionales de la lengua de comunidades marginadas. Creemos firmemente que el lenguaje debe ser un puente, no una barrera.', 
    'Language for Justice (L4J) é uma iniciativa de comunicação decolonial e contracolonial de base, impulsionada por e para intérpretes, tradutores e profissionais da linguagem de comunidades marginalizadas. Acreditamos firmemente que a linguagem deve ser uma ponte, não uma barreira.', 
  ]);


  return (
    <section id="section2" className="py-20 section">
      <div className="max-w-6xl mx-auto px-6 flex justify-center gap-4">
        {/* <img className="hidden md:block rounded-xl image-about" src={'/assets/images/home/home.png'} alt="imagem"/> */}

        <header>
          <h2 className="title-section-global">{title[language.code]}</h2>
          <p className="text-gray-700 leading-relaxed text-md font-medium">{paragraph[language.code]}</p>
        </header>
      </div>
    </section>
  );
}