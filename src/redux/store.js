import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import booksSlice from "./slices/booksSlice";
import createSagaMiddleware from "redux-saga";
import { root } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    books: booksSlice,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(root);
