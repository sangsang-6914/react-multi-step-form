import { createSlice } from '@reduxjs/toolkit';

export type pageState = {
  currPage: number;
  completedPage: number;
  questionLength: number;
};

const initialState: pageState = {
  currPage: 0,
  completedPage: 0,
  questionLength: 0,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    nextPage: (state) => {
      if (state.currPage === state.completedPage) {
        state.completedPage += 1;
      }
      state.currPage += 1;
    },
    prevPage: (state) => {
      state.currPage -= 1;
    },
    resetPage: (state) => {
      state.currPage = 0;
      state.completedPage = 0;
    },
    saveLength: (state, action) => {
      state.questionLength = action.payload;
    },
  },
});

export const { nextPage, prevPage, resetPage, saveLength } = pageSlice.actions;
export default pageSlice.reducer;
