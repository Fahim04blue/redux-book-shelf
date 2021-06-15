import React, { useEffect } from "react";
import Book from "../components/Book/Book";
// import books from '../fakeData/books.json'
import PageLayout from "../components/PageLayout/PageLayout";
import { useSelector, useDispatch } from "react-redux";
import { loadBooks } from "../redux/actions/BookActions";
const Discover = () => {
  const books = useSelector((state) => {
    // console.log("state :", state.books.discoverList);
    return state.books.discoverList;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks(), []);
  }, []);

  return (
    <PageLayout>
      {books?.map((book) => (
        <Book
          key={book.id}
          addBtn={true}
          checkBtn={false}
          removeBtn={false}
          book={book}
        />
      ))}
    </PageLayout>
  );
};

export default Discover;
