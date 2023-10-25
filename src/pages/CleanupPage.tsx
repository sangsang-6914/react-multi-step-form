import { useQuery } from '@tanstack/react-query';
import { getCleanupQuestionList } from '../api/cleanup';
import { RequestForm } from '../model/question';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { resetAnswer, saveFormId } from '../store/answer';
import { resetPage } from '../store/page';
import { AxiosError } from 'axios';
import Spinner from '../components/common/Spinner';
import Error from '../components/common/Error';
import ProgressBarWrapper from '../components/common/ProgressBarWrapper';
import QuestionFormWrapper from '../components/common/QuestionFormWrapper';

function CleanupPage() {
  const dispatch = useAppDispatch();
  const currPage = useAppSelector((state) => state.page.currPage);
  const {
    isLoading,
    error,
    data: cleanupRequestForm,
  } = useQuery<RequestForm, AxiosError>({
    queryKey: ['cleanupRequestForm'],
    queryFn: () => getCleanupQuestionList(),
    retry: 3,
    refetchOnWindowFocus: false,
  });

  const question = cleanupRequestForm?.items[currPage];
  const questionLength = cleanupRequestForm?.items.length ?? 0;

  const isSuccess = currPage === questionLength;

  useEffect(() => {
    dispatch(saveFormId(cleanupRequestForm?.formId));
    return () => {
      dispatch(resetAnswer());
      dispatch(resetPage());
    };
  }, [cleanupRequestForm, dispatch]);

  if (isLoading) return <Spinner />;

  if (error) return <Error error={error} />;

  return (
    <div className="flex flex-col h-[94vh] max-h-screen">
      <ProgressBarWrapper title="대청소" questionLength={questionLength} />
      <section className="bg-light_gray w-full h-full">
        <QuestionFormWrapper
          isSuccess={isSuccess}
          question={question}
          questionLength={questionLength}
        />
      </section>
    </div>
  );
}

export default CleanupPage;
