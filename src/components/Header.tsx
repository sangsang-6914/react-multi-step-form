import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex justify-center p-4 sticky top-0 border-b border-b-[#f2f2f2] bg-[#fff]">
      <Link to="/">
        <img
          data-v-54e47384=""
          src="https://assets.cdn.soomgo.com/icons/logo/navigation_logo.svg"
          alt="숨고 로고"
          data-testid="main-logo"
          className="h-[1.625rem]"
        ></img>
      </Link>
    </header>
  );
}

export default Header;
