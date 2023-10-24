import { useAppSelector } from '../../hooks/useRedux';

function SubmitComplete() {
  const submitData = JSON.stringify(
    useAppSelector((state) => state.answer),
    null,
    2
  );
  return <pre className="text-sm font-bold">{submitData}</pre>;
}

export default SubmitComplete;
