import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Catalog from "../BooksCatalog/catalog";
import "../BooksItem/booksItem.css";

function BooksItem() {
  const books = useSelector((state: RootState) => state.books);

  return books.isError ? (
    <div className="errorMessage">
      <h3>Oops, try again...</h3>
    </div>
  ) : (
    <div className="booksCatalogPage">
      {books.books
        ?.map((item) => item.volumeInfo)
        .map((book, index) => {
          console.log(book);
          return (
            <Catalog
              key={index}
              author={book?.authors?.join("; ") ?? "no author"}
              title={book.title ?? "no title"}
              imageLink={book.imageLinks?.smallThumbnail ?? ""}
              category={book.categories?.join("; ") ?? "no category"}
            />
          );
        })}
    </div>
  );
}

export default BooksItem;
