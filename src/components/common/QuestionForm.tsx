import { ChangeEvent, FormEvent, useState } from 'react';
import { Question } from '../../model/question';
import Button from '../ui/Button';

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
  // prev로 돌아왔을 때 redux 데이터 있으면 초기화
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>('');

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
    resetData();
    onNextBtnClick(e);
  };

  const resetData = () => {
    setCheckedList([]);
    setSelected('');
  };

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
