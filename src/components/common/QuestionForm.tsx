import { Question } from '../../model/question';
import Button from '../ui/Button';
import { useAppSelector } from '../../hooks/useRedux';
import Checkbox from '../ui/Checkbox';
import Radio from '../ui/Radio';
import useQuestion from '../../hooks/useQuestion';

type Props = {
  questionInfo: Question;
};

function QuestionForm({
  questionInfo: { title, options, formType, itemId },
}: Props) {
  const currPage = useAppSelector((state) => state.page.currPage);
  const questionLength = useAppSelector((state) => state.page.questionLength);

  const {
    checkedList,
    selected,
    handleChecked,
    handleSelected,
    handlePrevBtnClick,
    handleNextBtnClick,
    handleSubmitBtnClick,
  } = useQuestion(itemId, formType);

  return (
    <form className="flex flex-col gap-5 h-full justify-around">
      <h1 className="font-bold text-[1.6rem] w-full text-center">{title}</h1>
      <ul className="p-4 flex flex-col gap-4">
        {formType === 'checkbox' ? (
          <>
            {options.map(({ text, id }) => (
              <li key={id}>
                <Checkbox
                  text={text}
                  id={id}
                  checked={checkedList.includes(text)}
                  onChecked={handleChecked}
                />
              </li>
            ))}
          </>
        ) : (
          <>
            {options.map(({ text, id }) => (
              <li key={id}>
                <Radio
                  text={text}
                  id={id}
                  itemId={itemId}
                  checked={selected === text}
                  onSelected={handleSelected}
                />
              </li>
            ))}
          </>
        )}
      </ul>
      <div className="flex gap-4 self-end px-4">
        {currPage > 0 && (
          <Button text="이전" color="blue" onClick={handlePrevBtnClick} />
        )}
        {currPage < questionLength - 1 && (
          <Button text="다음" color="brand" onClick={handleNextBtnClick} />
        )}
        {currPage === questionLength - 1 && (
          <Button text="제출" color="red" onClick={handleSubmitBtnClick} />
        )}
      </div>
    </form>
  );
}

export default QuestionForm;
