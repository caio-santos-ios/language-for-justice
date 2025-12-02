"use client";

import Image from "next/image";
import "./Footer.css";
import { useState } from "react";


export default function Footer() {
  const [redes] = useState<any[]>([
    {
      img: 'https://res.cloudinary.com/dia2yiu6k/image/upload/v1764278823/GERAL/Instagram--Streamline-Font-Awesome_xda25v.png',
      uri: '',
      alt: 'icone do instagram',
      width: 20,
      height: 20
    },
    {
      img: 'https://res.cloudinary.com/dia2yiu6k/image/upload/v1764278823/GERAL/Youtube--Streamline-Font-Awesome_od16tm.png',
      uri: '',
      alt: 'icone do youtube',
      width: 25,
      height: 20
    }
  ])

  return (
    <footer className="text-white footer">
      <div className="container-redes">
        {
          redes.map((x: any) => {
            return (
              <a href={x.uri}>
                <Image width={x.width} height={x.height} alt={x.alt} src={x.img}/>
              </a>
            )
          })
        }
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Language For Justice. Todos os direitos reservados.</p>
      </div>

      <div className="container-dev">
        <p>Desenvolvido por: <a className="link-dev" target="_blank" href="https://caiodesenvolvedor.com.br/">caiodesenvolvedor.com.br</a></p>        
      </div>
    </footer>
  );
}