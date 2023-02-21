import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { EMPTY_USER, User } from "entities/User/model";

const initialState = { ...EMPTY_USER };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => ({ ...action.payload }),
    clearUser: () => ({ ...EMPTY_USER })
  }
})

export const UserActions = { ...userSlice.actions };
export const UserReducer = userSlice.reducer;