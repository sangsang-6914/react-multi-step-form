import { resetAnswer } from '../store/answer';
import { resetPage } from '../store/page';
import { useAppDispatch, useAppSelector } from './useRedux';

function useSubmit() {
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
  return { submitData, handleClick };
}

export default useSubmit;
