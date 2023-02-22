import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { UserModel } from 'entities/User';

export const store = configureStore({
  reducer: {
    user: UserModel.UserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
