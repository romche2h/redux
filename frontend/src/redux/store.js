import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/booksSlice";
import filterReducer from "./slices/filterSlice";
import errorReducer from "./slices/erorrSlice";

const store = configureStore({
  reducer: { books: booksReducer, filter: filterReducer, error: errorReducer },
});
export default store;
