import {
    configureStore,
    ThunkAction,
    Action,
    AnyAction,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';

import { UserModel } from 'entities/User';

export const getAppStore = (reducer: Reducer<any, AnyAction> | ReducersMapObject<any, AnyAction>) => configureStore({
    reducer: { ...reducer },
});

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
