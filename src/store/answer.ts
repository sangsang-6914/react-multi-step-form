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
      const id = action.payload.id;
      if (state.items.find((item) => item.id === id)) {
        const updatedAnswer = state.items.map((item) => {
          if (item.id === id) {
            return action.payload;
          } else {
            return item;
          }
        });
        state.items = updatedAnswer;
      } else {
        state.items.push(action.payload);
      }
    },
    resetAnswer: (state) => {
      state.id = 0;
      state.items = [];
    },
    formatAnswer: (state) => {
      const updatedAnswer = state.items.map((item) => {
        if (Array.isArray(item.answer)) {
          return { ...item, answer: item.answer.join(',') };
        }
        return item;
      });
      state.items = updatedAnswer;
    },
  },
});

export const { saveFormId, saveAnswer, resetAnswer, formatAnswer } =
  answerSlice.actions;
export default answerSlice.reducer;
