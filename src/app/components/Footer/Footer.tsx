"use client";

import Image from "next/image";
import "./Footer.css";
import { useState } from "react";


export default function Footer() {
  const [redes] = useState<any[]>([
    {
      img: 'https://res.cloudinary.com/dia2yiu6k/image/upload/v1764278821/GERAL/Linkedin-In--Streamline-Font-Awesome_1_fqn6oi.png',
      uri: 'https://www.linkedin.com/company/language-for-justice/',
      alt: 'icone do instagram',
      width: 20,
      height: 20
    },
    {
      img: 'https://res.cloudinary.com/dia2yiu6k/image/upload/v1764278820/GERAL/linktree-white-icon_ebdcsv.png',
      uri: 'https://linktr.ee/languageforjustice',
      alt: 'icone do linktree',
      width: 20,
      height: 20
    }
  ])

  return (
    <footer id="section4" className="text-white footer">
      <div className="container-redes">
        {
          redes.map((x: any) => {
            return (
              <a target="_blank" key={x.img} href={x.uri}>
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