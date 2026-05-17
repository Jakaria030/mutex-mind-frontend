import { FaSignOutAlt } from "react-icons/fa";
import MutexMindLogo from "../../../components/MutexMindLogo";

const AdminTopbar = () => {

    const currentDate = new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
    });

    const user = {
        name: "Jakaria",
    };

    return (
        <header className="h-16 border-b border-border-1 bg-white px-6 flex items-center justify-between sticky top-0 z-50">

            {/* Left */}
            <div className="flex items-center gap-10">

                {/* Logo */}
                <MutexMindLogo />

                {/* Date */}
                <p className="text-sm font-medium text-text-2">
                    {currentDate}
                </p>

            </div>

            {/* Right */}
            <div className="flex items-center gap-4">

                {/* Avatar */}
                <button
                    className="w-10 h-10 rounded-full bg-light-green text-white flex items-center justify-center text-sm font-bold uppercase"
                >
                    {user?.name?.charAt(0)}
                </button>

                {/* Logout */}
                <button
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