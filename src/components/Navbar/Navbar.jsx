import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 shadow-md">
      <h1 className="text-2xl font-bold text-lime-400">MyPortfolio</h1>
      <div className="space-x-6">
        <Link to="/" className=" text-amber-50 hover:text-blue-500">Home</Link>
        <Link to="/projects" className="hover:text-blue-500 text-amber-50">Projects</Link>
        <Link to="/contact" className="hover:text-blue-500 text-amber-50">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
