import { createAsyncThunk, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { LoadingStatus } from "shared/model";

import { fakeGetUser } from "../api";

import { EMPTY_USER, User } from "./types";

const initialState = { user: EMPTY_USER, status: {
    state: LoadingStatus.Done,
    error: null,
} }

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = EMPTY_USER
        },
        clearUserError: (state) => {
            state.status = {
                state: LoadingStatus.Done,
                error: null,
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUserAction.fulfilled, (state, action: PayloadAction<User>) => {
            state.user = action.payload
            state.status.state = LoadingStatus.Done;
            state.status.error = null;
        })
        .addCase(getUserAction.pending, (state) => {
            state.status.state = LoadingStatus.Loading;
            state.status.error = null;
        })
        .addCase(getUserAction.rejected, (state, action: PayloadAction<any>) => {
            state.status.state = LoadingStatus.Error;
            state.status.error = action.payload;
        })
      },
})

export const {setUser, clearUser} = userSlice.actions
export const UserReducer = userSlice.reducer
export const { reducer, actions }  = userSlice

export const userSelector = () => useSelector(
    createSelector((state: RootState) => state, (state) => state.user.user)
)
export const userStatusSelector = () => useSelector(
    createSelector((state: RootState) => state, (state) => state.user.status)
)

export const getUserAction = createAsyncThunk(
    'user/get',
    async (params: {username: string, password: string}, { rejectWithValue }) => {
      const response = await fakeGetUser(params.username, params.password, rejectWithValue)
      return response
    }
)