import { useEffect } from 'react';
import { RequestForm } from '../model/question';
import { useAppDispatch } from './useRedux';
import { resetAnswer, saveFormId } from '../store/answer';
import { resetPage, saveLength } from '../store/page';

function useCommon(currPage: number, requestForm?: RequestForm) {
  const dispatch = useAppDispatch();
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

  return { question, questionLength, isSuccess };
}

export default useCommon;
