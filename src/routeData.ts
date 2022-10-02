/* RouteIMG */
import lib1IMG from "./assets/AmbientImg/Library1/18.webp";
import televisorIMG from "./assets/AmbientImg/TeleVisor/teleVisor.webp";
import Latelier1IMG from "./assets/AmbientImg/L'atelier of the Memory/01.webp";
import Orchestration1IMG from "./assets/AmbientImg/Orchestration/01.webp";

/* Sound SFX */
import LibSFX from "./assets/AmbientSound/Library1.mp3";
import symphonySFX from "./assets/AmbientSound/Symphony.mp3";
//import LibSFX from "./assets/AmbientSound/latelierDummy.mp3";

import LatelierSFX from "./assets/AmbientSound/L'atelier of the Memory.mp3";

export interface IRouteData {
    name: string;
    path: string;
    img: string;
    sound: string;
}

/* Data */
const routeData = [
    { name: "Library", path: "/", img: lib1IMG, sound: LibSFX },
    {
        name: "L'atelier of the Memory",
        path: "latelier",
        img: Latelier1IMG,
        sound: LatelierSFX,
    },
    {
        name: "End of the Symphony",
        path: "symphony",
        img: Orchestration1IMG,
        sound: symphonySFX,
    },
    { name: "dummy0", path: "0", img: televisorIMG, sound: LibSFX },
    { name: "dummy1", path: "1", img: lib1IMG, sound: LibSFX },
    { name: "dummy2", path: "2", img: televisorIMG, sound: LibSFX },
    { name: "dummy3", path: "3", img: Latelier1IMG, sound: LibSFX },
    { name: "dummy4", path: "4", img: Orchestration1IMG, sound: LibSFX },
    { name: "dummy5", path: "5", img: lib1IMG, sound: LibSFX },
    { name: "dummy6", path: "6", img: televisorIMG, sound: LibSFX },
];

export default routeData;
