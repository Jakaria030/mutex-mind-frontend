import { Link, NavLink } from "react-router";
import MutexMindLogo from "../../../components/MutexMindLogo";

const Navbar = () => {
    return (
        <header className="w-full border-b border-border-1 bg-white">
            <nav className="max-w-5xl mx-auto px-2 sm:px-4 h-16 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <MutexMindLogo />
                    </Link>
                </div>

                {/* Nav Items */}
                <ul className="hidden md:flex items-center gap-5 text-text-2  font-dm font-medium">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-light-green" : "hover:text-light-green transition"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/subjects" className={({ isActive }) => isActive ? "text-light-green" : "hover:text-light-green transition"}>
                            Subjects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/leaderboard" className={({ isActive }) => isActive ? "text-light-green" : "hover:text-light-green transition"}>
                            Leaderboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-light-green" : "hover:text-light-green transition"}>
                            Contact
                        </NavLink>
                    </li>
                </ul>

                {/* Login and Get Started Buttons */}
                <div className="hidden md:flex items-center gap-2">
                    <Link
                        to="/login"
                        className="px-3 py-2 text-center rounded-sm font-medium border border-border-2 text-text-2 hover:border-light-green hover:text-light-green transition"
                    >
                        Login
                    </Link>

                    <Link
                        to="/subjects"
                        className="px-4 py-2 text-center rounded-sm bg-light-green text-white font-medium hover:bg-dark-green transition"
                    >
                        Start Now
                    </Link>
                </div>
            </nav>
        </header >
    );
};

export default Navbar;