import React, { FormEvent } from 'react';

type Props = {
  text: string;
  color: string;
  onClick?: (e: FormEvent) => void;
};

function Button({ text, color, onClick }: Props) {
  return (
    <button
      className={`${setColor(color)} p-3 text-white font-bold`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function setColor(color: string) {
  switch (color) {
    case 'red':
      return 'bg-red-400';
    case 'blue':
      return 'bg-blue-400';
    case 'brand':
      return 'bg-brand';
    default:
      return 'bg-brand';
  }
}

export default Button;
