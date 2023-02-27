import { createAsyncThunk, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import { RootState } from "app/store/store";

import { EMPTY_USER, Role, Status, User } from "./types";

const initialState = { user: EMPTY_USER, status: 'idle' }
export const fakeGetUser = (userName: string, password: string): Promise<User> => {
    const newUser = {
        ...EMPTY_USER,
        id: uuidv4(),
        nickname: userName,
        role: 'admin' as unknown as Role,
        status: 'online' as unknown as Status
    }
    return new Promise(res => {
        setTimeout(() => {
            res(newUser)
        }, 1000)
    })
}
export const getUserAction = createAsyncThunk(
    'user/get',
    async (params: {username: string, password: string}, thunkAPI) => {
      const response = await fakeGetUser(params.username, params.password)
      return response
    }
  )

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        clearUser: (state) => {
        state.user = EMPTY_USER
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUserAction.fulfilled, (state, action: PayloadAction<User>) => {
            state.user = action.payload
            state.status = 'idle'
        })
        .addCase(getUserAction.pending, (state) => {
            state.status = 'isPending'
        })
      },
})

export const {setUser, clearUser} = userSlice.actions
export const UserReducer = userSlice.reducer
export const {reducer,actions}  = userSlice

export const userSelector = () => useSelector(
    createSelector((state: RootState) => state, (state) => state.user.user)
)
export const userStatusSelector = () => useSelector(
    createSelector((state: RootState) => state, (state) => state.user.status)
)