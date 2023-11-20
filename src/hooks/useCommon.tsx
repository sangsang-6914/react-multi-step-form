import { useEffect } from 'react';
import { RequestForm } from '../model/question';
import { useAppDispatch, useAppSelector } from './useRedux';
import { resetAnswer, saveFormId } from '../store/answer';
import { resetPage, saveLength } from '../store/page';
import { useLocation } from 'react-router-dom';

function useCommon(requestForm?: RequestForm) {
  const currPage = useAppSelector((state) => state.page.currPage);
  const dispatch = useAppDispatch();
  const {
    state: { title },
    pathname,
  } = useLocation();

  const question = requestForm?.items[currPage];
  const questionLength = requestForm?.items.length ?? 0;

  const isSuccess = currPage === questionLength;

  useEffect(() => {
    dispatch(saveFormId(requestForm?.formId));
    return () => {
      dispatch(resetAnswer());
      dispatch(resetPage());
    };
  }, [dispatch, requestForm]);

  useEffect(() => {
    dispatch(saveLength(questionLength));
  }, [dispatch, questionLength]);

  return { question, isSuccess, title, pathname };
}

export default useCommon;
