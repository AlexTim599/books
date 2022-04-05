import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { FETCH_BOOKS } from "./actions";
import { getBooks } from "../../api/axios";
import {
  setBooksCount,
  errorBooks,
  setBooks,
  setIsloading,
} from "../slices/booksSlice";

function* booksWorker(action) {
  try {
    yield put({ type: setIsloading.type, payload: true });
    const books = yield call(getBooks, action.payload);
    yield put({ type: setBooks.type, payload: books.items });
    yield put({ type: setBooksCount.type, payload: books.totalItems });
  } catch (error) {
    yield put({ type: errorBooks.type, payload: error.message });
  }
}

function* booksWatcher() {
  yield takeLatest(FETCH_BOOKS, booksWorker);
}

export function* root() {
  yield all([fork(booksWatcher)]);
}
