import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import pageReducer from "./moviesSlice";
import { moviesApi } from "./moviesAPI";

const persistConfig = {
  key: "page",
  storage,
  whiteList: ["page"],
};

const persistedReducer = persistReducer(persistConfig, pageReducer);

const store = configureStore({
  reducer: {
    page: persistedReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    moviesApi.middleware,
  ],
});

// setupListeners(store.dispatch);

let persistor = persistStore(store);
export { persistor, store };

export type RootState = ReturnType<any>;
// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
