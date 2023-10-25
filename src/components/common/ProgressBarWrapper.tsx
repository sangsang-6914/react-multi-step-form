import ProgressBar from './ProgressBar';

type Props = {
  title: string;
};

function ProgressBarWrapper({ title }: Props) {
  return (
    <div className="sticky top-[3.625rem] bg-[#fff]">
      <section className="w-[27rem] mx-auto pt-6 pb-6 z-10 sm:w-[32.5rem]">
        <h2 className="font-bold text-2xl w-full text-center mb-4">{title}</h2>
        <ProgressBar />
      </section>
    </div>
  );
}

export default ProgressBarWrapper;
