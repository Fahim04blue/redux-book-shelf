import React, { useEffect } from "react";
import Book from "../components/Book/Book";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import { loadFromReadingList } from "../redux/actions/BookActions";
const ReadingList = () => {
  const books = useSelector((state) => {
    // console.log("state :", state.books.discoverList);
    return state.books.readingList;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFromReadingList());
  }, [dispatch]);
  return (
    <PageLayout>
      {books?.length ? (
        books?.map((book) => (
          <Book
            key={book.id}
            addBtn={false}
            checkBtn={true}
            removeBtn={true}
            book={book}
          />
        ))
      ) : (
        <p>
          Looks like you've finished all your books! Check them out in your{" "}
          <Link to="finish">finished books</Link> or{" "}
          <Link to="/">discover more</Link>.
        </p>
      )}
    </PageLayout>
  );
};

export default ReadingList;
