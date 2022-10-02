import { atom } from "recoil";

export const navToggleAtom = atom({
    key: "navToggle",
    default: false,
});

export const playerAtom = atom({
    key: "playerAtom",
    default: true,
});

export const colorAtom = atom({
    key: "colorAtom",
    default: "",
});
