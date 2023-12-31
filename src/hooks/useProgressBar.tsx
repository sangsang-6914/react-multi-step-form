import { useAppSelector } from './useRedux';

function getProgressBarGage(questionLength: number, completedPage: number) {
  if (completedPage === 0) return 0;
  return (completedPage / questionLength) * 100;
}

function useProgressBar() {
  const questionLength = useAppSelector((state) => state.page.questionLength);
  const completedPage = useAppSelector((state) => state.page.completedPage);

  const progressBarGage = getProgressBarGage(questionLength, completedPage);

  return { progressBarGage };
}

export default useProgressBar;
