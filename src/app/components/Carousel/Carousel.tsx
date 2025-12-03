"use client";

import { languageAtom } from "@/src/jotai/language.jotai";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { postAtom } from "@/src/jotai/post.jotai";
import { TPost } from "@/src/types/post.type";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "./Carousel.css";
import { TLanguage } from "@/src/types/language.type";


export default function Carousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [language] = useAtom<TLanguage>(languageAtom);
  const [posts] = useAtom<TPost[]>(postAtom);
  const [countPost, setCountPost] = useState<number>(1);
  const [title] = useState<string[]>([
    'Posts', 
    'publicaciones', 
    'Postes', 
  ]);
  
  const maxSizeText = (text: string) => {
    return text;
  } 


  const scrollLeft = (amount: number = 200) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -amount, behavior: "smooth" });

      if(countPost > 1) setCountPost(countPost - 1);
    }
  };

  const scrollRight = (amount: number = 200) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: amount, behavior: "smooth" });

      if(countPost < posts.length) setCountPost(countPost + 1);
    }
  };

  return (
    <section id="section3" className="section px-4">
      {/* <h1 className="text-4xl md:text-7xl font-bold text-center mb-4">{title[language.code]}</h1> */}

      <div className="carousel">
        <button onClick={() => scrollLeft()} className="btn-carousel btn-left-carousel hidden md:block">
          <FiChevronLeft size={45} />
        </button>
        <button onClick={() => scrollLeft(window.innerWidth + 16)} className="btn-carousel btn-left-carousel md:hidden">
          <FiChevronLeft size={45} />
        </button>

        <div ref={containerRef} className={`container-carousel ${posts.length > 3 ? 'md:justify-start' : 'md:justify-center'}`}>
          {
            posts.map((x: TPost) => {
              return (
                <div key={x.id} className="card-carousel">
                  <div className="card-image">
                    <img className="image" src="/assets/images/home/home.png" alt="" />
                  </div>
                  <div className="card-description">
                    <p>{maxSizeText(x.description)}</p>
                  </div>
                </div>
              )
            })
          }
        </div>

        <button onClick={() => scrollRight()} className="btn-carousel btn-right-carousel hidden md:block">
          <FiChevronRight size={45} />
        </button>
        <button onClick={() => scrollRight(window.innerWidth + 16)} className="btn-carousel btn-right-carousel md:hidden">
          <FiChevronRight size={45} />
        </button>
      </div>
      <p className="md:hidden text-end font-bold">{countPost}/{posts.length}</p>
    </section>
  );
}