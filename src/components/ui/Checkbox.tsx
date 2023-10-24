import { ChangeEvent, useState } from 'react';

type Props = {
  text: string;
  id: number;
  checked: boolean;
  onChecked: (e: ChangeEvent<HTMLInputElement>, text: string) => void;
};

function Checkbox({ text, id, checked, onChecked }: Props) {
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
        type="checkbox"
        value={text}
        id={`checkbox_${id}`}
        onChange={(e) => onChecked(e, text)}
        checked={checked}
        className="w-5 h-5 accent-brand"
      />
      <label
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="w-full hover:cursor-pointer text-base font-medium"
        htmlFor={`checkbox_${id}`}
      >
        {text}
      </label>
    </div>
  );
}

export default Checkbox;
