import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              DREAM MBBS
            </div>
          </div>

               {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/course-finder" className="text-gray-800 hover:text-blue-600 transition-colors">
              Medical College Finder
            </Link>
            <Link to="/cap" className="text-gray-800 hover:text-blue-600 transition-colors">
              MBBS Guides
            </Link>
            <Link to="/blog" className="text-gray-800 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600 transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Login Button */}
          <div className="flex items-center">
              <Link to="/login">
            <button  className="border border-gray-300 text-gray-800 hover:bg-gray-100 px-4 py-2 rounded mr-4">
              Login
            </button>
            </Link>
            <button className="hidden sm:inline-flex bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 text-sm rounded">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
