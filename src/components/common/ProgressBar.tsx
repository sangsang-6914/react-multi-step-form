import { useAppSelector } from '../../hooks/useRedux';

type Props = {
  questionLength: number;
};

function ProgressBar({ questionLength }: Props) {
  const completedPage = useAppSelector((state) => state.page.completedPage);
  const progressBarGage = getProgressBarGage(questionLength, completedPage);

  return (
    <div className="w-full h-2 bg-gray-200 rounded-xl">
      <div
        style={{ width: `${progressBarGage}%`, opacity: `${progressBarGage}%` }}
        className={`h-2 bg-brand_lighter_1 transition-all duration-[1200ms] rounded-xl`}
      ></div>
    </div>
  );
}

function getProgressBarGage(questionLength: number, completedPage: number) {
  if (completedPage === 0) return 0;
  return (completedPage / questionLength) * 100;
}

export default ProgressBar;
