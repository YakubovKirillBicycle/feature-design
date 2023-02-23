import { createSelector, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import { EMPTY_USER, User } from "./types";

const initialState = { ...EMPTY_USER }

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => ({ ...action.payload }),
        clearUser: () => ({ ...EMPTY_USER })
    }
})

export const {setUser, clearUser} = userSlice.actions
export const UserReducer = userSlice.reducer

export const getUserAsync = (username: string, password: string) => async (dispatch: Dispatch) => {
    const user = await new Promise(() => setTimeout(() => {
        dispatch(userSlice.actions.setUser({
            ...EMPTY_USER,
            id: uuidv4(),
            nickname: username,
            role: 'admin',
            status: 'online'
        }))
    }, 1000))
}

export const userSelector = () => useSelector(
    createSelector((state: {user: User}) => state, (state) => state.user)
)