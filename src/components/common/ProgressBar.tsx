import useProgressBar from '../../hooks/useProgressBar';
import { useAppSelector } from '../../hooks/useRedux';

function ProgressBar() {
  const questionLength = useAppSelector((state) => state.page.questionLength);
  const { progressBarGage } = useProgressBar(questionLength);

  return (
    <div className="w-full h-2 bg-gray-200 rounded-xl">
      <div
        style={{ width: `${progressBarGage}%`, opacity: `${progressBarGage}%` }}
        className={`h-2 bg-brand_lighter_1 transition-all duration-[1200ms] rounded-xl`}
      ></div>
    </div>
  );
}

export default ProgressBar;
