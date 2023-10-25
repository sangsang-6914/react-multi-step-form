import { useAppSelector } from '../hooks/useRedux';
import Spinner from '../components/common/Spinner';
import Error from '../components/common/Error';
import ProgressBarWrapper from '../components/common/ProgressBarWrapper';
import QuestionFormWrapper from '../components/common/QuestionFormWrapper';
import useCleanup from '../hooks/useCleanup';
import useCommon from '../hooks/useCommon';
function CleanupPage() {
  const currPage = useAppSelector((state) => state.page.currPage);

  const { isLoading, error, cleanupRequestForm } = useCleanup();

  const { question, questionLength, isSuccess } = useCommon(
    currPage,
    cleanupRequestForm
  );

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
