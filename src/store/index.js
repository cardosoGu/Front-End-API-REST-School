import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import auth from './authSlice';

// config persist
const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};
// reducers
const rootReducer = combineReducers({
  auth,
});
// combine persist with reducers to save in redux storage
const persistedReducer = persistReducer(persistConfig, rootReducer);

// persistedReducer into configureStore to config reducers and storages
const store = configureStore({
  reducer: persistedReducer,

  // default middleware to do browser stop to warn unnecessarily
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// to use into the app to persist
export const Persistor = persistStore(store);

// to use into the app to user actions/reducers
export default store;
