import { atom } from "jotai";
import { TLanguage } from "../types/language.type";

// en = 0 | es = 1 | br = 2
const currentLanguage: TLanguage = {code: 1, description: "en"}
export const languageAtom = atom<TLanguage>(currentLanguage);