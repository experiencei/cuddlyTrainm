import { IRootState } from "@/store/store";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const getUser: any = createAsyncThunk("user", (user: any) => {});
import { useRouter } from "next/navigation";

const getUserFromLocalStorage = () => {
  let user;
  if (typeof window !== "undefined") {
    const getUser = localStorage.getItem("User");
    user = getUser ? JSON.parse(getUser) : {};
  }
  return user;
};
// Define a type for the slice state

export interface IUserStateInitialState {
  user: any;
}

// Define the initial state using that type
const initialState: IUserStateInitialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      // if (typeof window !== "undefined") {
      //     localStorage.setItem("User", JSON.stringify(action.payload));
      // }
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: IRootState) => state.user?.user;
export default userSlice.reducer;
