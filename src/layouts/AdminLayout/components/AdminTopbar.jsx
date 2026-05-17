import { FaSignOutAlt } from "react-icons/fa";
import MutexMindLogo from "../../../components/MutexMindLogo";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../../context/AuthContext";
import LiveDateTime from "./LiveDateTime";

const AdminTopbar = () => {
    const { user, logout } = useAuth();

    const navigate = useNavigate();


    // Handle logout
    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <header className="h-16 border-b border-border-1 bg-white px-6 flex items-center justify-between sticky top-0 z-50">

            {/* Left */}
            <div className="flex items-center gap-10">

                {/* Logo */}
                <Link to="/">
                    <MutexMindLogo />
                </Link>

                {/* Live date time*/}
                <LiveDateTime />

            </div>

            {/* Right */}
            <div className="flex items-center gap-4">

                {/* Avatar */}
                <div
                    className="rounded-sm border-light-green text-text-1 flex items-center justify-center text-sm font-medium capitalize"
                >
                    Hi, {user?.name}
                </div>

                {/* Logout */}
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 h-10 rounded-sm cursor-pointer border border-border-1 text-sm font-medium text-text-2 hover:border-red-400 hover:text-red-500 transition"
                >
                    <FaSignOutAlt size={13} />
                    Logout
                </button>

            </div>

        </header>
    );
};

export default AdminTopbar;