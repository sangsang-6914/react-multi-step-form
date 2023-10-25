import { Question } from '../../model/question';
import QuestionForm from './QuestionForm';
import SubmitComplete from './SubmitComplete';

type Props = {
  isSuccess: boolean;
  question?: Question;
};

function QuestionFormWrapper({ isSuccess, question }: Props) {
  return (
    <div className="w-[27rem] mx-auto mt-16 sm:w-[32.5rem]">
      <div className="p-10 rounded-xl shadow-xl w-full bg-[#fff]">
        {isSuccess ? (
          <SubmitComplete />
        ) : (
          question && <QuestionForm questionInfo={question} />
        )}
      </div>
    </div>
  );
}

export default QuestionFormWrapper;
