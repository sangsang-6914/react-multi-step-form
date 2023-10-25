import { Link, useLocation } from 'react-router-dom';

function ErrorPage() {
  const { pathname } = useLocation();
  return (
    <div className="fixed top-0 w-full h-full flex flex-col gap-5 items-center justify-center">
      <span className="text-xl font-semibold">
        잘못된 접근({pathname}) 입니다.
      </span>
      <Link to="/" className="text-2xl font-bold text-brand">
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default ErrorPage;
