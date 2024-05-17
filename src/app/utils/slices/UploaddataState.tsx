import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import Cookies from "js-cookie";

export interface UploaddataState {
  value: string;
}

const initialState: UploaddataState = {
  value: "{}",
};

export const UploaddataSlice = createSlice({
  name: "Uploaddata",
  initialState,
  reducers: {
    updateByValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      // Cookies.set("Uploaddata", action.payload, { expires: 365 });
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateByValue } = UploaddataSlice.actions;
export const selectValueProp = (state: RootState) => state.Uploaddata.value;

export default UploaddataSlice.reducer;
