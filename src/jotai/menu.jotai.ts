import { atom } from "jotai";
import { TMenu } from "../types/menu.type";

export const menuAtom = atom<TMenu[]>([
    {description: ["Home", "Comenzar", "Ínicio"]},
    {description: ["About", "Sobre nosotros", "Sobre nós"]},
    {description: ["Contact", "Contacto", "Contato"]},
]);