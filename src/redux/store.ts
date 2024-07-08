import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

// infer rootstate
export type RootState = ReturnType<typeof store.getState>;
// infer dispatch
export type AppDispatch = typeof store.dispatch;
