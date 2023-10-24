import { configureStore } from '@reduxjs/toolkit';
import AnswerReducer from './answer';
import PageReducer from './page';

const store = configureStore({
  reducer: {
    answer: AnswerReducer,
    page: PageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
