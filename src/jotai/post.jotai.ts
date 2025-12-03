import { atom } from "jotai";
import { TPost } from "../types/post.type";

export const postAtom = atom<TPost[]>([
    {
        id: "1",
        image: "/assets/images/home/home.png",
        description: "A round of applause to the 6th star of our weekly 'Meet Our Palestinian Talents' Series: Noor! Despite unimaginable challenges in Gaza, Noor Tilbani held onto her dream and is now a talented simultaneous interpreter. Her story shows how she found her spark back amid war and darkness. Read and feel inspired by her journey below:"
    },
    {
        id: "2",
        image: "",
        description: 'It`s Week 5 of our "Meet Our Palestinian Talents" series! 🎉 Today, we introduce Mirshid Rjoub, a dedicated teacher from Hebron. His powerful dream is to found the first Translation College in Palestine, a vital goal he prepares for by wishing to pursue a Master’s degree abroad. Read his inspiring story of building a bridge to the world! 🚀'
    },
    {
        id: "3",
        image: "",
        description: 'It`s Sunday, and we present the 4th installment of our "Meet Our Palestinian Talents" weekly feature. 🛡️ In his piece, Tamir Sharawneh offers a humorous look at the bureaucratic and legal barriers faced by translators in the West Bank, pointedly detailing the struggle for professional legitimacy. 📚 The full text of this crucial read on linguistic justice and access is available below. 📍'
    },
])