import React, { ChangeEvent, useState } from 'react';

type Props = {
  text: string;
  id: number;
  itemId: number;
  checked: boolean;
  onSelected: (text: string) => void;
};

function Radio({ text, id, itemId, checked, onSelected }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        border: `${hover ? '1px solid #19A69C' : ''}`,
        opacity: `${hover ? '0.8' : ''}`,
      }}
      className={`flex items-center gap-3 border border-gray-200 p-4 rounded-lg ${
        hover ? 'border-brand border-opacity-80' : ''
      }`}
    >
      <input
        type="radio"
        value={text}
        id={`radio_${id}`}
        name={itemId + ''}
        onChange={() => onSelected(text)}
        checked={checked}
        className="w-5 h-5 accent-brand"
      />
      <label
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="w-full hover:cursor-pointer text-base font-medium"
        htmlFor={`radio_${id}`}
      >
        {text}
      </label>
    </div>
  );
}

export default Radio;
