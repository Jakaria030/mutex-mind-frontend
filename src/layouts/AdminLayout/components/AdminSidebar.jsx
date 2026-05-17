import { NavLink } from "react-router";
import {
    FaTachometerAlt,
    FaBook,
    FaClipboardList,
    FaQuestionCircle,
    FaUsers,
    FaCog,
} from "react-icons/fa";

const AdminSidebar = () => {

    const navLinks = [
        {
            name: "Dashboard",
            path: "/admin",
            icon: <FaTachometerAlt size={14} />,
        },
        {
            name: "Add Subject",
            path: "/admin/add-subject",
            icon: <FaBook size={14} />,
        },
        {
            name: "Add Exam",
            path: "/admin/add-exam",
            icon: <FaClipboardList size={14} />,
        },
        {
            name: "Add Questions",
            path: "/admin/add-questions",
            icon: <FaQuestionCircle size={14} />,
        },
        {
            name: "Users",
            path: "/admin/users",
            icon: <FaUsers size={14} />,
        },
        {
            name: "Settings",
            path: "/admin/settings",
            icon: <FaCog size={14} />,
        },
    ];

    return (
        <aside className="w-64 min-h-[calc(100vh-64px)] border-r border-border-1 bg-white p-4 fixed">

            <nav className="space-y-2">

                {navLinks.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === "/admin"}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-sm text-sm font-medium transition ${isActive
                                ? "bg-light-green text-white"
                                : "text-text-2 hover:bg-light-green/10 hover:text-light-green"
                            }`
                        }
                    >
                        {item.icon}

                        <span>{item.name}</span>
                    </NavLink>
                ))}

            </nav>

        </aside>
    );
};

export default AdminSidebar;