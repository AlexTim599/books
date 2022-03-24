import { createSlice } from "@reduxjs/toolkit";

interface BooksSliceState {
  books: any[];
  booksCount: number;
  isError: boolean;
  errorMessage: string | null;
}

interface ActionTape {
  type: string;
  action?: any;
  payload?: any;
}

const initialState: BooksSliceState = {
  books: [],
  booksCount: 0,
  isError: false,
  errorMessage: "",
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action: ActionTape) => {
      return {
        ...state,
        books: action.payload,
        isError: false,
      };
    },
    setBooksCount: (state, action) => {
      return {
        ...state,
        booksCount: action.payload,
      };
    },
    errorBooks: (state, action) => {
      return {
        ...state,
        isError: true,
        errorMessage: action.payload,
      };
    },
  },
});

export const { setBooks, setBooksCount, errorBooks } = booksSlice.actions;
export default booksSlice.reducer;
