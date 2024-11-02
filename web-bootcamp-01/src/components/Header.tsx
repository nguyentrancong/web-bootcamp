import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex h-14 items-center">
      <nav className="flex gap-4 text-2xl cursor-pointer">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
