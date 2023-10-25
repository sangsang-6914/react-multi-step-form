import React from 'react';

function Spinner() {
  return (
    <div className="fixed top-0 w-full h-full flex flex-col gap-5 items-center justify-center">
      <div className="animate-spin-infinite w-16 h-16 border border-[#c8c8c8] border-t-2 border-t-brand rounded-[50%] " />
      <span className="font-semibold">데이터를 받아오는 중입니다...</span>
    </div>
  );
}

export default Spinner;
