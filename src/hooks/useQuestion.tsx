import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './useRedux';
import { formatAnswer, saveAnswer } from '../store/answer';
import { nextPage, prevPage } from '../store/page';

function useQuestion(itemId: number, formType: string) {
  const answerList = useAppSelector((state) => state.answer.items);

  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleChecked = (e: ChangeEvent<HTMLInputElement>, text: string) => {
    const isChecked = e.target.checked;
    const updatedCheckedList = updateCheckedList(isChecked, text);

    setCheckedList(updatedCheckedList);

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
    handleBefore();

    dispatch(nextPage());
    resetData();
  };

  const handleSubmitBtnClick = (e: FormEvent) => {
    e.preventDefault();
    handleBefore();

    // 제출 완료 페이지의 answer 데이터의 문자열 표현을 위함
    dispatch(formatAnswer());
    dispatch(nextPage());
    resetData();
  };

  const handleBefore = () => {
    if (!checkedList.length && selected === '') {
      window.alert('값을 입력해 주세요!');
      return;
    }
  };

  const resetData = () => {
    setCheckedList([]);
    setSelected('');
  };

  const updateCheckedList = (isChecked: boolean, text: string) => {
    let updatedCheckedList;
    if (isChecked) {
      updatedCheckedList = [...checkedList, text];
    } else {
      updatedCheckedList = checkedList.filter((item) => item !== text);
    }
    return updatedCheckedList;
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
  return {
    checkedList,
    selected,
    handleChecked,
    handleSelected,
    handlePrevBtnClick,
    handleNextBtnClick,
    handleSubmitBtnClick,
  };
}

export default useQuestion;
