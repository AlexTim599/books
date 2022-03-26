export interface IBooks {
  volumeInfo: {
    title: string;
    authors: string[];
    // вынести в отдельный тип
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    categories: string[];
  };
}

export interface IBooksSliceState {
  books: IBooks[];
  booksCount: number;
  isError: boolean;
  errorMessage: string | null;
  isLoading: boolean;
}

export interface IActionType {
  type: string;
  action?: any;
  payload?: any;
}
