import { ChangeEvent, useState } from 'react';

type Props = {
  type: 'checkbox' | 'radio';
  text: string;
  id: number;
  checked: boolean;
  itemId: number;
  onClicked: (e: ChangeEvent<HTMLInputElement>, text: string) => void;
};

function Input({ type, text, id, checked, itemId, onClicked }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        border: `${hover ? '1px solid #19A69C' : ''}`,
        opacity: `${hover ? '0.8' : ''}`,
      }}
      className={`flex items-center gap-3 border border-gray-200 p-4 rounded-lg`}
    >
      <input
        type={type}
        value={text}
        id={`${type}_${id}`}
        name={itemId + ''}
        onChange={(e) => onClicked(e, text)}
        checked={checked}
        className="w-5 h-5 accent-brand"
      />
      <label
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="w-full hover:cursor-pointer text-base font-medium"
        htmlFor={`${type}_${id}`}
      >
        {text}
      </label>
    </div>
  );
}

export default Input;
