import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActionType, IBooksSliceState } from "../../component/Models/books";

const initialState: IBooksSliceState = {
  books: [],
  booksCount: 0,
  isError: false,
  errorMessage: "",
  isLoading: false,
};

export const BooksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state: IBooksSliceState, action: IActionType) => {
      return {
        ...state,
        books: action.payload,
        isError: false,
        isLoading: true,
      };
    },
    setBooksCount: (state: IBooksSliceState, action: PayloadAction<number>) => {
      return {
        ...state,
        booksCount: action.payload,
      };
    },
    errorBooks: (state: IBooksSliceState, action: IActionType) => {
      return {
        ...state,
        isError: true,
        errorMessage: action.payload,
        isLoading: true,
      };
    },
    setIsloading: (
      state: IBooksSliceState,
      action: PayloadAction<boolean>
    ) => ({ ...state, isLoading: action.payload }),
  },
});

export const { setBooks, setBooksCount, errorBooks, setIsloading } =
  BooksSlice.actions;
export default BooksSlice.reducer;
