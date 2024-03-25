// This file contains the Recoil atom that stores the current language of the application. The atom is exported so that it can be used in other components.

import { atom } from "recoil";

const languageState = atom({
  key: "languageState",
  default: "en",
});

export default languageState;
