import { Question } from '../../model/question';
import Button from '../ui/Button';

type Props = {
  questionInfo: Question;
  onNextBtnClick: () => void;
  onPrevBtnClick: () => void;
};

function QuestionForm({
  questionInfo: { title, options, formType, itemId },
  onNextBtnClick,
  onPrevBtnClick,
}: Props) {
  return (
    <section className="flex flex-col h-full justify-between">
      <h1 className="font-bold text-3xl w-full text-center">{title}</h1>
      <ul className="p-4">
        {formType === 'checkbox' ? (
          <>
            {options.map(({ text, id }) => (
              <li key={id} className="flex gap-2">
                <input type="checkbox" value={text} id={`checkbox_${id}`} />
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
                />
                <label htmlFor={`checkbox_${id}`}>{text}</label>
              </li>
            ))}
          </>
        )}
      </ul>
      <div className="flex gap-4 self-end">
        <Button text="Prev" color="blue" onClick={onPrevBtnClick} />
        <Button text="Next" color="brand" onClick={onNextBtnClick} />
      </div>
    </section>
  );
}

export default QuestionForm;
