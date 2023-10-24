import { useAppSelector } from '../../hooks/useRedux';

type Props = {
  questionLength: number;
};

function ProgressBar({ questionLength }: Props) {
  const completedPage = useAppSelector((state) => state.page.completedPage);
  const progressBarGage = getProgressBarGage(questionLength, completedPage);

  return (
    <div className="w-full h-[5px] bg-gray-200">
      <div
        style={{ width: `${progressBarGage}%`, opacity: `${progressBarGage}%` }}
        className={`h-[5px] bg-brand_lighter_1`}
      ></div>
    </div>
  );
}

function getProgressBarGage(questionLength: number, completedPage: number) {
  if (completedPage === 0) return 0;
  return (completedPage / questionLength) * 100;
}

export default ProgressBar;
