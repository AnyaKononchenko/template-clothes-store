import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../app/store";
import { UserState } from "../types/features";

const initialState: UserState = {
  currentUser: 'user',
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state) => {
      return {
        ...state,
        currentUser: 'user'
      }
    },
    setAdmin: (state) => {
      return {
        ...state,
        currentUser: 'admin'
      }
    }
  }
})

export const { setUser } = userSlice.actions;

export const selectCurrentUser = (state: RootState) => state.user.currentUser;

export default userSlice.reducer;