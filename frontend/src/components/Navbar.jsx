import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-4xl font-bold ">SocietyHub</div>

        <ul className="flex space-x-6 text-lg">
          <li className="hover:text-yellow-400 cursor-pointer">
            <Link to="/createaccount">Create Account</Link>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer">
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
