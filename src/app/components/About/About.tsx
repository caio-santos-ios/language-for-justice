"use client";

import { languageAtom } from "@/src/jotai/language.jotai";
import { useAtom } from "jotai";
import { useState } from "react";
import "./About.css";

export default function About() {
  const [language] = useAtom(languageAtom);
  const [title] = useState<string[]>([
    'About Us', 
    'sobre Nosotros', 
    'Sobre Nós', 
  ]);
  
  const [paragraph1] = useState<string[]>([
    'Language for Justice (L4J) is a grassroots decolonial and countercolonial communication initiative, driven by and for interpreters, translators, and language professionals from marginalized communities. We firmly believe that language should be a bridge, not a barrier.', 
    'Lenguaje por la Justicia (L4J) es una iniciativa comunitaria de comunicación descolonial y contracolonial, impulsada por y para intérpretes, traductores y profesionales de la lengua de comunidades marginadas. Creemos firmemente que el lenguaje debe ser un puente, no una barrera.', 
    'Language for Justice (L4J) é uma iniciativa de comunicação decolonial e contracolonial de base, impulsionada por e para intérpretes, tradutores e profissionais da linguagem de comunidades marginalizadas. Acreditamos firmemente que a linguagem deve ser uma ponte, não uma barreira.', 
  ]);
  const [paragraph2] = useState<string[]>([
    'We address linguistic exclusion by providing our community with access to professional development, specialized training, and direct mobilization. Currently, we are expanding our scope to support organizations with global social missions and their interpretation and industry-related service needs.',
    'We address linguistic exclusion by providing our community with access to professional development, specialized training, and direct mobilization. Currently, we are expanding our scope to support organizations with global social missions and their interpretation and industry-related service needs.',
    'We address linguistic exclusion by providing our community with access to professional development, specialized training, and direct mobilization. Currently, we are expanding our scope to support organizations with global social missions and their interpretation and industry-related service needs.'
  ]);
  const [paragraph3] = useState<string[]>([
    'For this purpose, our first Cohort (2025) trained dozens of new talents in interpretation from Gaza and the West Bank, who are now ready to take on jobs.',
    'For this purpose, our first Cohort (2025) trained dozens of new talents in interpretation from Gaza and the West Bank, who are now ready to take on jobs.',
    'For this purpose, our first Cohort (2025) trained dozens of new talents in interpretation from Gaza and the West Bank, who are now ready to take on jobs.'
  ]);
  const [paragraph4] = useState<string[]>([
    'Our vibrant global network connects dedicated community professionals and allies passionate about social causes. We serve as a central hub, creating paid and volunteer opportunities, and are committed to empowering our members by showcasing their skills and connecting them to meaningful careers.',
    'Our vibrant global network connects dedicated community professionals and allies passionate about social causes. We serve as a central hub, creating paid and volunteer opportunities, and are committed to empowering our members by showcasing their skills and connecting them to meaningful careers.',
    'Our vibrant global network connects dedicated community professionals and allies passionate about social causes. We serve as a central hub, creating paid and volunteer opportunities, and are committed to empowering our members by showcasing their skills and connecting them to meaningful careers.'
  ]);
  const [paragraph5] = useState<string[]>([
    'Our mission is to empower our participants with the tools necessary to create tangible opportunities in education, justice, health, and civic life.',
    'Our mission is to empower our participants with the tools necessary to create tangible opportunities in education, justice, health, and civic life.',
    'Our mission is to empower our participants with the tools necessary to create tangible opportunities in education, justice, health, and civic life.'
  ]);
  const [paragraph6] = useState<string[]>([
    'We actively work towards a more equitable and multilingual world, dismantling communication hierarchies from the inside out.',
    'We actively work towards a more equitable and multilingual world, dismantling communication hierarchies from the inside out.',
    'We actively work towards a more equitable and multilingual world, dismantling communication hierarchies from the inside out.'
  ]);
  const [paragraph7] = useState<string[]>([
    'Damos as boas-vindas a voluntários, colaboradores e a todas as pessoas que desejam se juntar à nossa rede global inclusiva de defensores que falam a verdade ao poder. Fomentamos a interação e o apoio mútuo. Junte-se ao nosso WhatsApp, siga nossa página e preencha nosso formulário de voluntariado para participar!',
    'Damos as boas-vindas a voluntários, colaboradores e a todas as pessoas que desejam se juntar à nossa rede global inclusiva de defensores que falam a verdade ao poder. Fomentamos a interação e o apoio mútuo. Junte-se ao nosso WhatsApp, siga nossa página e preencha nosso formulário de voluntariado para participar!',
    'Damos as boas-vindas a voluntários, colaboradores e a todas as pessoas que desejam se juntar à nossa rede global inclusiva de defensores que falam a verdade ao poder. Fomentamos a interação e o apoio mútuo. Junte-se ao nosso WhatsApp, siga nossa página e preencha nosso formulário de voluntariado para participar!'
  ]);
  const [paragraph8] = useState<string[]>([
    'For interested companies or organizations, please get in touch. Let`s build linguistic and social equity together!',
    'For interested companies or organizations, please get in touch. Let`s build linguistic and social equity together!',
    'For interested companies or organizations, please get in touch. Let`s build linguistic and social equity together!'
  ]);
  const [paragraph9] = useState<string[]>([
    'Image credit: Jaguatirika [Juliana Gomes, artistic illustration], the world map through the indigenous lens of the Global South. 🎨',
    'Image credit: Jaguatirika [Juliana Gomes, artistic illustration], the world map through the indigenous lens of the Global South. 🎨',
    'Image credit: Jaguatirika [Juliana Gomes, artistic illustration], the world map through the indigenous lens of the Global South. 🎨'
  ]);

  return (
    <section id="section2" className="py-20 section">
      <div className="max-w-6xl mx-auto px-6 flex justify-center gap-4">
        <div className="container-image">
          <img className="hidden md:block rounded-xl image-about" src={'/assets/images/home/home.png'} alt="imagem"/>
        </div>

        <header>
          <h2 className="title-section-global">{title[language.code]}</h2>
          <p className="text-gray-700 leading-relaxed text-md font-medium mb-3">{paragraph1[language.code]}</p>
          <p className="text-gray-700 leading-relaxed text-md font-medium mb-3">{paragraph2[language.code]}</p>
          <p className="text-gray-700 leading-relaxed text-md font-medium mb-3">{paragraph3[language.code]}</p>
        </header>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex justify-center gap-4">
        <header>
          <p className="text-gray-700 leading-relaxed text-md font-medium mb-3">{paragraph4[language.code]}</p>
          <p className="text-gray-700 leading-relaxed text-md font-medium mb-3">{paragraph5[language.code]}</p>
          <p className="text-gray-700 leading-relaxed text-md font-medium mb-3">{paragraph6[language.code]}</p>
          <p className="text-gray-700 leading-relaxed text-md font-medium mb-3">{paragraph7[language.code]}</p>
          <p className="text-gray-700 leading-relaxed text-md font-medium mb-3">{paragraph8[language.code]}</p>
          <p className="text-gray-700 leading-relaxed text-md font-medium mb-3">{paragraph9[language.code]}</p>
        </header>
      </div>
    </section>
  );
}