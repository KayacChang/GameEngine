import { configureStore, createSlice } from "@reduxjs/toolkit";
import { PropsWithChildren } from "react";
import { Provider, useSelector } from "react-redux";

import { TSceneName } from "scenes";

const scene = createSlice({
  name: "scene",
  initialState: "Loading" as TSceneName,
  reducers: {
    navTo: (state) => state,
  },
});

const store = configureStore({
  reducer: {
    scene: scene.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export function useScene() {
  return useSelector<RootState, TSceneName>((state) => state.scene);
}

export function StoreProvider({ children }: PropsWithChildren<{}>) {
  return <Provider store={store}>{children}</Provider>;
}
