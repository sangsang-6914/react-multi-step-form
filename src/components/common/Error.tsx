import { AxiosError } from 'axios';

type Props = {
  error: AxiosError;
};

function Error({ error }: Props) {
  return (
    <div className="fixed top-0 w-full h-full flex flex-col gap-5 items-center justify-center">
      <span className="text-2xl font-semibold">
        데이터를 받아오는 도중 에러가 발생했습니다.
      </span>
      <span className="font-semibold">Server Error: {error.message}</span>
    </div>
  );
}

export default Error;
