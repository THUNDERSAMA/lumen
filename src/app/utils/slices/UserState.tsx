import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import Cookies from "js-cookie";

export interface UserState {
  value: { userType: string; primaryColor: string; secondaryColor: string };
}

const initialState: UserState = {
  value: {
    userType: Cookies.get("user") || "patient",
    primaryColor: Cookies.get("primaryColor") || "bg-purple-700",
    secondaryColor: Cookies.get("secondaryColor") || "bg-purple-200",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<string>) => {
      Cookies.set("user", action.payload, { expires: 365 });
      state.value.userType = action.payload;
      state.value.primaryColor =
        action.payload === "doctor" ? "bg-orange-700" : "bg-purple-700";
      state.value.secondaryColor =
        action.payload === "doctor" ? "bg-orange-700" : "bg-purple-700";
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions;
export const selectValueProp = (state: RootState) => state.user.value;

export default userSlice.reducer;
