import { useLocation } from 'react-router-dom';
import Error from '../components/common/Error';
import ProgressBarWrapper from '../components/common/ProgressBarWrapper';
import QuestionFormWrapper from '../components/common/QuestionFormWrapper';
import Spinner from '../components/ui/Spinner';
import useCommon from '../hooks/useCommon';
import useFetch from '../hooks/useFetch';

function RequestFormPage() {
  const {
    pathname,
    state: { title },
  } = useLocation();
  const { isLoading, error, data: requestForm } = useFetch(pathname);
  const { question, isSuccess } = useCommon(requestForm);

  if (isLoading) return <Spinner />;

  if (error) return <Error error={error} />;

  return (
    <div className="flex flex-col h-[94vh] max-h-screen">
      <ProgressBarWrapper title={title} />
      <section className="bg-light_gray w-full h-full">
        <QuestionFormWrapper isSuccess={isSuccess} question={question} />
      </section>
    </div>
  );
}

export default RequestFormPage;
