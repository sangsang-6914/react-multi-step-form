import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Question } from '../../model/question';
import Button from '../ui/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { formatAnswer, saveAnswer } from '../../store/answer';
import { nextPage, prevPage } from '../../store/page';

type Props = {
  questionInfo: Question;
  questionLength: number;
};

function QuestionForm({
  questionInfo: { title, options, formType, itemId },
  questionLength,
}: Props) {
  const answerList = useAppSelector((state) => state.answer.items);
  const currPage = useAppSelector((state) => state.page.currPage);

  const dispatch = useAppDispatch();

  const [checkedList, setCheckedList] = useState<string[]>([]);

  const [selected, setSelected] = useState<string>('');

  const handleChecked = (e: ChangeEvent<HTMLInputElement>, text: string) => {
    const isChecked = e.target.checked;
    let updatedCheckedList;
    if (isChecked) {
      updatedCheckedList = [...checkedList, text];
      setCheckedList(updatedCheckedList);
    } else {
      updatedCheckedList = checkedList.filter((item) => item !== text);
      setCheckedList(updatedCheckedList);
    }

    dispatch(
      saveAnswer({
        id: itemId,
        answer: updatedCheckedList,
      })
    );
  };

  const handleSelected = (e: ChangeEvent<HTMLInputElement>, text: string) => {
    if (selected === text) return;
    setSelected(text);

    dispatch(
      saveAnswer({
        id: itemId,
        answer: text,
      })
    );
  };

  const handlePrevBtnClick = (e: FormEvent) => {
    e.preventDefault();
    dispatch(prevPage());
    resetData();
  };

  const handleNextBtnClick = (e: FormEvent) => {
    e.preventDefault();

    // 유효성 검증
    if (!checkedList.length && selected === '') {
      window.alert('값을 입력해 주세요!');
      return;
    }

    dispatch(nextPage());
    resetData();
  };

  const handleSubmitBtnClick = (e: FormEvent) => {
    e.preventDefault();

    // 유효성 검증
    if (!checkedList.length && selected === '') {
      window.alert('값을 입력해 주세요!');
      return;
    }

    // 제출 완료 페이지의 answer 데이터의 문자열 표현을 위함
    dispatch(formatAnswer());
    dispatch(nextPage());
    resetData();
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
    <form className="flex flex-col gap-5 h-full justify-around">
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
        {currPage > 0 && (
          <Button text="Prev" color="blue" onClick={handlePrevBtnClick} />
        )}
        {currPage < questionLength - 1 && (
          <Button text="Next" color="brand" onClick={handleNextBtnClick} />
        )}
        {currPage === questionLength - 1 && (
          <Button text="Submit" color="red" onClick={handleSubmitBtnClick} />
        )}
      </div>
    </form>
  );
}

export default QuestionForm;
