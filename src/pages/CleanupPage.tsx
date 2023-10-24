import { useQuery } from '@tanstack/react-query';
import { getCleanupQuestionList } from '../api/cleanup';
import { RequestForm } from '../model/question';
import { FormEvent, useEffect, useState } from 'react';
import QuestionForm from '../components/common/QuestionForm';
import { useAppDispatch } from '../hooks/useRedux';
import { resetAnswer, saveFormId } from '../store/answer';

function CleanupPage() {
  const dispatch = useAppDispatch();
  const [currPage, setCurrPage] = useState(0);
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

  const handlePrevClick = (e: FormEvent) => {
    e.preventDefault();
    currPage > 0 && setCurrPage((prev) => prev - 1);
  };

  const handleNextClick = (e: FormEvent) => {
    e.preventDefault();
    currPage < questionLength - 1 && setCurrPage((prev) => prev + 1);
  };

  useEffect(() => {
    dispatch(saveFormId(cleanupRequestForm?.formId));
    return () => {
      dispatch(resetAnswer());
    };
  }, [cleanupRequestForm, dispatch]);

  return (
    <div className="flex flex-col h-[94vh] max-h-screen">
      <div className="sticky top-[3.625rem] bg-[#fff]">
        <section className="w-[40.5rem] mx-auto pt-6 pb-6 z-10">
          <h2 className="font-bold text-2xl">대청소</h2>
          <div>Progressbar</div>
        </section>
      </div>
      <section className="bg-light_gray w-full h-full">
        <div className="w-[40.5rem] mx-auto">
          <div className="p-6 mt-10 rounded-lg w-full h-[500px] bg-[#fff]">
            {isSuccess ? (
              <div>success page</div>
            ) : (
              question && (
                <QuestionForm
                  questionInfo={question}
                  onNextBtnClick={handleNextClick}
                  onPrevBtnClick={handlePrevClick}
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
