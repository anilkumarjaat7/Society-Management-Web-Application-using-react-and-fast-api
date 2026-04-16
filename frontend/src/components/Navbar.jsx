function Navbar() {
  return (
    <nav className="bg-amber-900 text-white flex space-x-316 h-15 text-center fl ">
      <div className="text-4xl font-bold ">SocietyHub</div>

      <ul className="flex space-x-50">
        <li className="font-bold text-xl">Login</li>
        <li className="font-bold text-xl"> Create Account</li>
      </ul>
    </nav>
  );
}

export default Navbar;
