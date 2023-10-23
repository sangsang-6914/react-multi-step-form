import ServiceCard from '../components/ServiceCard';

const serviceList = [
  {
    title: '대청소',
    imagePath: 'images/cleanup.jpg',
    path: '/cleanup',
  },
  {
    title: '영어과외',
    imagePath: 'images/english.jpg',
    path: '/english-tutoring',
  },
];

function HomePage() {
  return (
    <section className="w-full flex flex-col items-center max-w-[60.625rem] mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">서비스 요청</h1>
      <div className="flex w-full flex-col md:flex-row md:justify-center gap-5">
        {serviceList.map(({ title, imagePath, path }) => (
          <ServiceCard title={title} imagePath={imagePath} path={path} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
