import { configureStore } from '@reduxjs/toolkit';
import AnswerReducer from './answer';

const store = configureStore({
  reducer: {
    answer: AnswerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
