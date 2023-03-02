declare type RootState = ReturnType<typeof import("./app/providers/index").store.getState>;
declare type AppDispatch = ReturnType<typeof import("./app/providers/index").store.dispatch>;