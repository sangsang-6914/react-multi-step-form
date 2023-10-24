import { useQuery } from '@tanstack/react-query';
import { getCleanupQuestionList } from '../api/cleanup';
import { RequestForm } from '../model/question';
import { useEffect } from 'react';
import QuestionForm from '../components/common/QuestionForm';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { resetAnswer, saveFormId } from '../store/answer';
import SubmitComplete from '../components/common/SubmitComplete';
import { resetPage } from '../store/page';
import ProgressBar from '../components/common/ProgressBar';

function CleanupPage() {
  const dispatch = useAppDispatch();
  const currPage = useAppSelector((state) => state.page.currPage);
  const {
    isLoading,
    error,
    data: cleanupRequestForm,
  } = useQuery<RequestForm>({
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="flex flex-col h-[94vh] max-h-screen">
      <div className="sticky top-[3.625rem] bg-[#fff]">
        <section className="w-[32.5rem] mx-auto pt-6 pb-6 z-10">
          <h2 className="font-bold text-2xl w-full text-center mb-4">대청소</h2>
          <ProgressBar questionLength={questionLength} />
        </section>
      </div>
      <section className="bg-light_gray w-full h-full">
        <div className="w-[32.5rem] mx-auto mt-10">
          <div className="p-10 mt-10 rounded-xl shadow-xl w-full bg-[#fff]">
            {isSuccess ? (
              <SubmitComplete />
            ) : (
              question && (
                <QuestionForm
                  questionInfo={question}
                  questionLength={questionLength}
                />
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CleanupPage;
