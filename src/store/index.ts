import { configureStore, Middleware } from '@reduxjs/toolkit';
import usuario from './reducers/usuario';

const middlewares: Middleware[] = [];

const store = configureStore({
  reducer: {
    usuario
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().prepend(...middlewares)
  ,
});

export type RootState = ReturnType<typeof store.getState>

export default store;