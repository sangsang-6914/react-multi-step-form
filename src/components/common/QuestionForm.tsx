import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Question } from '../../model/question';
import Button from '../ui/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { saveAnswer } from '../../store/answer';

type Props = {
  questionInfo: Question;
  onNextBtnClick: (e: FormEvent) => void;
  onPrevBtnClick: (e: FormEvent) => void;
};

function QuestionForm({
  questionInfo: { title, options, formType, itemId },
  onNextBtnClick,
  onPrevBtnClick,
}: Props) {
  const answerList = useAppSelector((state) => state.answer.items);

  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleChecked = (e: ChangeEvent<HTMLInputElement>, text: string) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setCheckedList((prev) => [...prev, text]);
    } else {
      setCheckedList(checkedList.filter((item) => item !== text));
    }
  };

  const handleSelected = (e: ChangeEvent<HTMLInputElement>, text: string) => {
    if (selected === text) return;
    setSelected(text);
  };

  const handlePrevBtnClick = (e: FormEvent) => {
    resetData();
    onPrevBtnClick(e);
  };

  const handleNextBtnClick = (e: FormEvent) => {
    dispatch(
      saveAnswer({
        id: itemId,
        answer: formType === 'checkbox' ? checkedList : selected,
      })
    );
    resetData();
    onNextBtnClick(e);
  };

  const resetData = () => {
    setCheckedList([]);
    setSelected('');
  };

  useEffect(() => {
    const initCheckedList = () => {
      if (answerList.length) {
        if (answerList.find((answer) => answer.id === itemId)) {
          const index = answerList.findIndex((answer) => answer.id === itemId);
          const data = answerList[index].answer as string[];
          return data;
        } else {
          return [];
        }
      }
      return [];
    };
    const initSelected = () => {
      if (answerList.length) {
        if (answerList.find((answer) => answer.id === itemId)) {
          const index = answerList.findIndex((answer) => answer.id === itemId);
          const data = answerList[index].answer as string;
          return data;
        } else {
          return '';
        }
      }
      return '';
    };
    formType === 'checkbox'
      ? setCheckedList(initCheckedList)
      : setSelected(initSelected);
  }, [answerList, itemId, formType]);

  return (
    <form className="flex flex-col h-full justify-between">
      <h1 className="font-bold text-3xl w-full text-center">{title}</h1>
      <ul className="p-4">
        {formType === 'checkbox' ? (
          <>
            {options.map(({ text, id }) => (
              <li key={id} className="flex gap-2">
                <input
                  type="checkbox"
                  value={text}
                  id={`checkbox_${id}`}
                  onChange={(e) => handleChecked(e, text)}
                  checked={checkedList.includes(text)}
                />
                <label htmlFor={`checkbox_${id}`}>{text}</label>
              </li>
            ))}
          </>
        ) : (
          <>
            {options.map(({ text, id }) => (
              <li key={id} className="flex gap-2">
                <input
                  type="radio"
                  value={text}
                  id={`checkbox_${id}`}
                  name={itemId + ''}
                  onChange={(e) => handleSelected(e, text)}
                  checked={selected === text}
                />
                <label htmlFor={`checkbox_${id}`}>{text}</label>
              </li>
            ))}
          </>
        )}
      </ul>
      <div className="flex gap-4 self-end">
        <Button text="Prev" color="blue" onClick={handlePrevBtnClick} />
        <Button text="Next" color="brand" onClick={handleNextBtnClick} />
      </div>
    </form>
  );
}

export default QuestionForm;
