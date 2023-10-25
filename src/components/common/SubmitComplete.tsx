import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { resetAnswer } from '../../store/answer';
import { resetPage } from '../../store/page';
import Button from '../ui/Button';

function SubmitComplete() {
  const dispatch = useAppDispatch();
  const submitData = JSON.stringify(
    useAppSelector((state) => state.answer),
    null,
    2
  );

  const handleClick = () => {
    dispatch(resetAnswer());
    dispatch(resetPage());
  };

  return (
    <div className="flex flex-col gap-7">
      <h2 className="w-full text-center text-[1.6rem] font-bold">
        서비스 요청 완료
      </h2>
      <div className="p-4 bg-slate-700 rounded-lg">
        <pre className="text-sm text-white">{submitData}</pre>
      </div>
      <div className="w-full text-center">
        <Button text="다시 요청하기" color="green" onClick={handleClick} />
      </div>
    </div>
  );
}

export default SubmitComplete;
