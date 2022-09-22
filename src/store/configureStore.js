import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import mainReducer from './reducers/mainReducer';

const store = configureStore({
  reducer: { main: mainReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
