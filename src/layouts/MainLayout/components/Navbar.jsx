import { useState } from "react";
import { Link, NavLink } from "react-router";
import { HiOutlineMenu, HiX } from "react-icons/hi";

import MutexMindLogo from "../../../components/MutexMindLogo";

const Navbar = () => {
    const [open, setOpen] = useState(false);


    // Nav class style
    const navClass = ({ isActive }) => {
        return isActive ? "text-light-green font-semibold" : "hover:text-light-green transition";
    };

    return (
        <header className="w-full border-b border-border-1 bg-white sticky top-0 z-50">
            <nav className="max-w-5xl mx-auto px-2 sm:px-4 h-16 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <MutexMindLogo />
                    </Link>
                </div>

                {/* Nav Items (Desktop) */}
                <ul className="hidden md:flex items-center gap-5 text-text-2 font-dm font-medium">
                    <li>
                        <NavLink to="/" className={navClass}>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/subjects" className={navClass}>
                            Subjects
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/leaderboard" className={navClass}>
                            Leaderboard
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" className={navClass}>
                            Contact
                        </NavLink>
                    </li>
                </ul>

                {/* Buttons (Desktop) */}
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

                {/* Hamburger (Mobile+Tablet) */}
                <button
                    className="md:hidden text-3xl text-text-2"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <HiX /> : <HiOutlineMenu />}
                </button>
            </nav>

            {/* Mobile + Tablet Menu */}
            {open && (
                <div className="md:hidden border-t border-border-1 bg-white px-4 py-3">
                    <ul className="flex flex-col gap-3 text-text-2 font-dm font-medium">

                        <li>
                            <NavLink onClick={() => setOpen(false)} to="/">
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink onClick={() => setOpen(false)} to="/subjects">
                                Subjects
                            </NavLink>
                        </li>

                        <li>
                            <NavLink onClick={() => setOpen(false)} to="/leaderboard">
                                Leaderboard
                            </NavLink>
                        </li>

                        <li>
                            <NavLink onClick={() => setOpen(false)} to="/contact">
                                Contact
                            </NavLink>
                        </li>

                        <div className="flex gap-2 pt-2">
                            <Link
                                to="/login"
                                onClick={() => setOpen(false)}
                                className="flex-1 px-3 py-2 text-center rounded-sm border border-border-2 text-text-2"
                            >
                                Login
                            </Link>

                            <Link
                                to="/subjects"
                                onClick={() => setOpen(false)}
                                className="flex-1 px-3 py-2 text-center rounded-sm bg-light-green text-white"
                            >
                                Start Now
                            </Link>
                        </div>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;