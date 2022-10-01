/* RouteIMG */
import lib1IMG from "./assets/AmbientImg/Library1/01.webp";
import televisorIMG from "./assets/AmbientImg/TeleVisor/teleVisor.webp";
import Latelier1IMG from "./assets/AmbientImg/L'atelier of the Memory/01.webp";
import Orchestration1IMG from "./assets/AmbientImg/Orchestration/01.webp";

/* Sound SFX */
import LibSFX from "./assets/AmbientSound/Library1.mp3";

export interface IRouteData {
    name: string;
    path: string;
    img: string;
    sound: string;
}

/* Data */
const routeData = [
    { name: "Library", path: "/", img: lib1IMG, sound: LibSFX },
    { name: "Televisor", path: "a", img: televisorIMG, sound: LibSFX },
    {
        name: "L'atelier of the Memory",
        path: "b",
        img: Latelier1IMG,
        sound: LibSFX,
    },
    {
        name: "End of the Symphony",
        path: "c",
        img: Orchestration1IMG,
        sound: LibSFX,
    },
    { name: "dummy1", path: "1", img: lib1IMG, sound: LibSFX },
    { name: "dummy2", path: "2", img: televisorIMG, sound: LibSFX },
    { name: "dummy3", path: "3", img: Latelier1IMG, sound: LibSFX },
    { name: "dummy4", path: "4", img: Orchestration1IMG, sound: LibSFX },
    { name: "dummy5", path: "5", img: lib1IMG, sound: LibSFX },
    { name: "dummy6", path: "6", img: televisorIMG, sound: LibSFX },
];

export default routeData;
