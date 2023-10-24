import { createSlice } from '@reduxjs/toolkit';

export type pageState = {
  currPage: number;
};

const initialState: pageState = {
  currPage: 0,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currPage += 1;
    },
    prevPage: (state) => {
      state.currPage -= 1;
    },
    resetPage: (state) => {
      state.currPage = 0;
    },
  },
});

export const { nextPage, prevPage, resetPage } = pageSlice.actions;
export default pageSlice.reducer;
