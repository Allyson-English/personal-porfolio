import { atom } from "recoil";

export const locationState = atom<string>({
  key: "location-state",
  default: "/",
});
