import Spinner from '../components/ui/Spinner';
import Error from '../components/common/Error';
import ProgressBarWrapper from '../components/common/ProgressBarWrapper';
import QuestionFormWrapper from '../components/common/QuestionFormWrapper';
import useCommon from '../hooks/useCommon';
import useFetch from '../hooks/useFetch';

function EnglishTutoring() {
  const {
    isLoading,
    error,
    data: englishTutoringRequestForm,
  } = useFetch('englishTutoring');

  const { question, isSuccess } = useCommon(englishTutoringRequestForm);

  if (isLoading) return <Spinner />;

  if (error) return <Error error={error} />;

  return (
    <div className="flex flex-col h-[94vh] max-h-screen">
      <ProgressBarWrapper title="영어 과외" />
      <section className="bg-light_gray w-full h-full">
        <QuestionFormWrapper isSuccess={isSuccess} question={question} />
      </section>
    </div>
  );
}

export default EnglishTutoring;
