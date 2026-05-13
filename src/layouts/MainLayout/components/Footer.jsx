import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";

import MutexMindLogo from "../../../components/MutexMindLogo";

const Footer = () => {

    // Dynamic Subjects
    const subjects = [
        "All Subject",
        "C Programming",
        "Database",
        "Networking",
    ];

    return (
        <footer className="bg-navy">

            {/* Top Section */}
            <div className="max-w-5xl mx-auto px-2 sm:px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Left */}
                <div className="md:col-span-2">
                    <Link to="/" className="inline-flex items-center">
                        <MutexMindLogo color="#FFFFFF" />
                    </Link>

                    <p className="max-w-xs mt-4 text-sm leading-6 text-text-3 font-dm">
                        Mutex Mind is a modern learning platform designed to help
                        students practice quizzes, improve skills, and track progress
                        efficiently.
                    </p>
                </div>

                {/* Middle */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4 font-dm">
                        Subjects
                    </h3>

                    <ul className="space-y-2">
                        {subjects.map((subject, index) => (
                            <li key={index}>
                                <Link
                                    to="/subjects"
                                    className="text-text-3 hover:text-light-green transition font-dm"
                                >
                                    {subject}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4 font-dm">
                        Quick Links
                    </h3>

                    <ul className="space-y-2">
                        <li>
                            <Link
                                to="/"
                                className="text-text-3 hover:text-light-green transition font-dm"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/subjects"
                                className="text-text-3 hover:text-light-green transition font-dm"
                            >
                                Subjects
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/leaderboard"
                                className="text-text-3 hover:text-light-green transition font-dm"
                            >
                                Leaderboard
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                className="text-text-3 hover:text-light-green transition font-dm"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/25">
                <div className="max-w-5xl mx-auto px-2 sm:px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

                    {/* Copyright */}
                    <p className="text-sm text-text-3 font-dm text-center sm:text-left">
                        © {new Date().getFullYear()} Mutex Mind. All rights reserved.
                    </p>

                    {/* Social */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-9 h-9 rounded-full border border-border-2 flex items-center justify-center text-text-3 hover:bg-light-green hover:text-white hover:border-light-green transition"
                        >
                            <FaFacebookF />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;