import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import Cookies from "js-cookie";

export interface LanguageState {
  value: string;
}

const initialState: LanguageState = {
  value:
    // Cookies.get("language") ||
    "en",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    updateByValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      // Cookies.set("language", action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateByValue } = languageSlice.actions;
export const selectValueProp = (state: RootState) => state.language.value;

export default languageSlice.reducer;
