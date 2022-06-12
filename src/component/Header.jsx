import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-center pt-10 bg-gray-100">
      <div className="w-2/4 text-center">
        <Link to={'/'}>
          <p className="text-5xl font-mono">Apple Store Online</p>
        </Link>
        <div className="text-right mb-3">
          <Link to={'/cart'}>
            <i className="mr-3 fa-3x fa-solid fa-cart-arrow-down"></i>
          </Link>
          <Link to={'/favorite'}>
            <i className="mr-3 fa-3x fa-solid fa-star"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
