// storeConfig.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import authSlice from "./slices/authSlice";
import postsSlice from "./slices/postsSlice";
import themeSlice from "./slices/themeSlice";

// Combine reducers
const rootReducer = combineReducers({
  auth: authSlice,
  posts: postsSlice,
  theme: themeSlice
  // Add other slices here
});

// Redux Persist configuration
const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Export persistor if needed
export const persistor = persistStore(store);
