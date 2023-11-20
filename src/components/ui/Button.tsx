import React, { FormEvent } from 'react';

type Props = {
  text: string;
  color: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: FormEvent) => void;
};

function Button({ text, type = 'button', color, onClick }: Props) {
  return (
    <button
      className={`${setColor(
        color
      )} py-2 px-6 text-white font-semibold rounded-md hover:brightness-90`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function setColor(color: string) {
  switch (color) {
    case 'red':
      return 'bg-red-500';
    case 'blue':
      return 'bg-blue-500';
    case 'green':
      return 'bg-emerald-500';
    case 'brand':
      return 'bg-brand';
    default:
      return 'bg-brand';
  }
}

export default Button;
