import React from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book/Book";
import PageLayout from "../components/PageLayout/PageLayout";
import { useSelector } from "react-redux";
const FinishedBooks = () => {
  const books = useSelector((state) => {
    // console.log("state :", state.books.discoverList);
    return state.books.finishedList;
  });
  return (
    <PageLayout>
      {books?.length ? (
        books?.map((book) => (
          <Book
            key={book.id}
            addBtn={false}
            checkBtn={false}
            removeBtn={true}
            book={book}
          />
        ))
      ) : (
        <p>
          Hey there! This is where books will go when you've finished reading
          them. Get started by heading over to the <Link to="/">Discover</Link>{" "}
          page to add books to your list.
        </p>
      )}
    </PageLayout>
  );
};

export default FinishedBooks;
