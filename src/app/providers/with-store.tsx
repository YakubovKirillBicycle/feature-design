/* eslint-disable react/display-name */
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux"


import { UserModel } from "entities/User";

export const store = configureStore({
    reducer: {
      user: UserModel.UserReducer
    }
  })
  
export const withStore = (component: () => React.ReactNode) => () => {
  return (
    <Provider store={store}>
      {component()}
    </Provider>
  )

}
