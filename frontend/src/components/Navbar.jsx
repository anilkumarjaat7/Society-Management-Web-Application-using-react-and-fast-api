import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X, Building2 } from "lucide-react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl shadow-sm dark:border-slate-800 dark:bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-md">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                SocietyHub
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Smart Society Management
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-[15px] font-medium text-slate-700 dark:text-slate-200">
              <li>
                <Link
                  to="/createaccount"
                  className="hover:text-emerald-600 transition"
                >
                  Create Account
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-emerald-600 transition">
                  Login
                </Link>
              </li>
            </ul>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-11 h-11 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200"
            >
              {mobileMenu ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="md:hidden pb-5">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg p-4">
              <ul className="flex flex-col gap-4 text-slate-700 dark:text-slate-200 font-medium">
                <li>
                  <Link
                    to="/createaccount"
                    className="block hover:text-emerald-600 transition"
                    onClick={() => setMobileMenu(false)}
                  >
                    Create Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="block hover:text-emerald-600 transition"
                    onClick={() => setMobileMenu(false)}
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
