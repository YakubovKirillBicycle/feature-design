/* eslint-disable react/display-name */
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux"


import { MachineModel } from "entities/Machine";
import { UserListModel, UserModel } from "entities/User";

export const store = configureStore({
    reducer: {
      user: UserModel.UserReducer,
      userList: UserListModel.reducer,
      machines: MachineModel.reducer,
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck: false,
      })
    ,
  })
  
export const withStore = (component: () => React.ReactNode) => () => {
  return (
    <Provider store={store}>
      {component()}
    </Provider>
  )

}
