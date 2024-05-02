import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";
import {
  addBook,
  fetchBook,
  selectIsLoadingViaAPI,
} from "../../redux/slices/booksSlice";
import { setError } from "../../redux/slices/erorrSlice";
import booksData from "../../data/books.json";
import createBookWithId from "../../utils/createBookWithId";
import "./BookForm.css";
const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI);
  const dispatch = useDispatch();

  const handelAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    dispatch(addBook(createBookWithId(randomBook, "random")));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      //dispatch action //если титле и афтор заполнены то мы будем отправлять действия в redux store. И после операции dispatch нам следует обнулить значение для title и author тоесть сбросить все поля воода в этой формы
      dispatch(addBook(createBookWithId({ title, author }, "manual")));
      setTitle("");
      setAuthor("");
    } else {
      dispatch(setError("You must fill title and author"));
    }
  };

  const handelAddRandomBookViaAPI = () => {
    dispatch(fetchBook("http://localhost:4000/random-book-delayed"));
  };

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button type="submit">Add Book</button>
          <button type="button" onClick={handelAddRandomBook}>
            Add random
          </button>
          <button
            type="button"
            onClick={handelAddRandomBookViaAPI}
            disabled={isLoadingViaAPI} // что бы пользователь не  мог нажать на кнопку пока ожидается ответ от сервера
          >
            {isLoadingViaAPI ? (
              <>
                <span>Looding book...</span>
                <FaSpinner className="spinner" />
              </>
            ) : (
              "Add Random via API"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
