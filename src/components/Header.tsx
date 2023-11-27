import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex items-center md:justify-center p-4 sticky top-0 border-b border-b-light_gray bg-[#fff] h-[3.625rem] z-20">
      <Link to="/">
        <h1 className="text-brand font-bold italic text-2xl">MSF</h1>
      </Link>
    </header>
  );
}

export default Header;
