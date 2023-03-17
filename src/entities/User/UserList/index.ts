import { PayloadAction, createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { AppModel } from "shared";

import { User } from "../model/types";

import { getAllUsersFromDb } from "./api";

const usersAdapter = createEntityAdapter<User>({
    selectId: (user: User) => user.id
});

const initState = {
    userList: usersAdapter.getInitialState(),
    status: {
        state: AppModel.LoadingStatus.Done,
        error: null,
    }
}
const UserListSlice = createSlice({
    name: 'userList',
    initialState: initState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            usersAdapter.addOne(state.userList, action.payload)
        },
        addUsers: (state, action: PayloadAction<User[]>) => {
            usersAdapter.addMany(state.userList, action.payload)
        },
        removeUser: (state, action: PayloadAction<User>) => {
            usersAdapter.removeOne(state.userList, action.payload.id)
        },
        clearUsers: (state) => {
            usersAdapter.removeAll(state.userList)
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUsersAction.fulfilled, (state, action: PayloadAction<User[]>) => {
            usersAdapter.setAll(state.userList, action.payload)
            state.status.state = AppModel.LoadingStatus.Done;
            state.status.error = null;
        })
        .addCase(getUsersAction.pending, (state) => {
            state.status.state = AppModel.LoadingStatus.Loading;
            state.status.error = null;
        })
        .addCase(getUsersAction.rejected, (state, action: PayloadAction<any>) => {
            state.status.state = AppModel.LoadingStatus.Error;
            state.status.error = action.payload;
        })
    },
});

export const { reducer, actions }  = UserListSlice

const usersSelectors = usersAdapter.getSelectors((state: RootState) => state.userList );

export const {
    selectById,
    selectAll,
} = usersSelectors;

export const getUsersAction = createAsyncThunk(
    'users/get',
    async (_, { rejectWithValue }) => {
      const response = await getAllUsersFromDb(rejectWithValue)
      return response
    }
)