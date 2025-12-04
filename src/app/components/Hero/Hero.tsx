"use client";

import { languageAtom } from "@/src/jotai/language.jotai";
import { useAtom } from "jotai";
import { useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [language] = useAtom(languageAtom)
  const [title] = useState<string[]>([
    'Language for Justice', 
    'Lenguaje para la justicia', 
    'Linguagem para Justiça', 
  ]);
  const [subTitle] = useState<string[]>([
    'Breaking down language barriers to dismantle systemic inequity. ✊🏽✊🏾✊🏿', 
    'Bienvenido a',
    'Superando as barreiras linguísticas para desmantelar a desigualdade sistêmica', 
  ]);
  const [textBtn1] = useState<string[]>([
    'Volunteer Agreement Form', 
    'Formulario de acuerdo de voluntariado',
    'Formulário de Acordo de Voluntariado', 
  ]);
  const [textBtn2] = useState<string[]>([
    'Discover More About L4J', 
    'Descubra más sobre L4J',
    'Descubra mais sobre L4J', 
  ]);

  return (
    <section id="section1" className="h-screen flex items-center justify-center bg-cover bg-center text-white section container-hero">
      <div className="px-1 flex flex-col items-center">
        <h1 className="text-4xl md:text-8xl text-center mb-4 title-here">{title[language.code]}</h1>
        <p className="md:text-4xl font-medium text-center mb-8">{subTitle[language.code]}</p>

        <div className="flex flex-col md:flex-row gap-8">
          <button className="btn-hero btn-volunteer">{textBtn1[language.code]}</button>
          <button className="btn-hero btn-dicover">{textBtn2[language.code]}</button>
        </div>
      </div>
    </section>
  );
}