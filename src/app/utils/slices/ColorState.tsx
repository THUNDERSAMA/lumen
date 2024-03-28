import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface ColorState {
  value: { primary: string; secondary: string };
}

const initialState: ColorState = {
  value: { primary: "bg-orange-700", secondary: "bg-orange-200" },
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    updatePrimaryColor: (state, action: PayloadAction<string>) => {
      state.value.primary = action.payload;
    },
    updateSecondaryColor: (state, action: PayloadAction<string>) => {
      state.value.secondary = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updatePrimaryColor, updateSecondaryColor } = colorSlice.actions;
export const selectValueProp = (state: RootState) => state.color.value;

export default colorSlice.reducer;
