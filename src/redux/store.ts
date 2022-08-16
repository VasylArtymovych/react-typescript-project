import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
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

const persistConfig = {
  key: "page",
  storage,
  whiteList: ["page"],
};

const persistedReducer = persistReducer(persistConfig, pageReducer);

const store = configureStore({
  reducer: {
    page: persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

let persistor = persistStore(store);

export { persistor, store };

// export type RootState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<any>;

export type AppDispatch = typeof store.dispatch;
