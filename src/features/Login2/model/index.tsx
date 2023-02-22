import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

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

export const useUserDispatch = useDispatch;
export const useUserSelector: TypedUseSelectorHook<User> = useSelector
