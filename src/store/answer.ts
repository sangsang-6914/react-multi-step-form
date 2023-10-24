import { createSlice } from '@reduxjs/toolkit';

export type answerState = {
  id: number;
  items: answer[];
};

type answer = {
  id: number;
  answer: string | string[];
};

const initialState: answerState = {
  id: 0,
  items: [],
};

const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    saveFormId: (state, action) => {
      state.id = action.payload;
    },
    saveAnswer: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { saveFormId, saveAnswer } = answerSlice.actions;
export default answerSlice.reducer;
