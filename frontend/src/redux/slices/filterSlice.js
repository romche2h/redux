import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
  onlyFavorite: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
      //   return { ...state, title: action.payload };
    },
    setAutorFilter: (state, action) => {
      state.author = action.payload;
      // return { ...state, author: action.payload };
    },
    resetFilters: () => {
      return initialState;
    },
    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite;
    },
  },
});

export const {
  setTitleFilter,
  resetFilters,
  setAutorFilter,
  setOnlyFavoriteFilter,
} = filterSlice.actions;
export const selectTitleFilter = (state) => state.filter.title; ///filter это название слайса, то есть name:'filter'
export const selectAuthorFilter = (state) => state.filter.author;
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite;
export default filterSlice.reducer;
