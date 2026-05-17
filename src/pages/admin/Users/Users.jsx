import { useEffect, useState } from "react";
import { FaBan, FaCheckCircle, FaSearch } from "react-icons/fa";
import { getAllUser, toggleActiveStatus } from "../../../services/userServices";
import Spinner from "../../../components/Spinner";
import NoDataFound from "../../../components/NoDataFound";


const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");


    // Load users
    const loadUsers = async () => {
        setLoading(true);
        try {
            const res = await getAllUser();
            setUsers(res.data.users);
        } finally {
            setLoading(false);
        }
    };

    // Handle active status
    const handleActiveStatus = async (id) => {
        try {
            await toggleActiveStatus(id);

            const updatedUser = users.map((user) => {
                if (user._id === id) {
                    return {
                        ...user,
                        isActive: !user.isActive
                    };
                }
                return user;
            });

            setUsers(updatedUser);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        loadUsers();
    }, []);


    // Search user
    const filteredUsers = users.filter((user) => {
        const query = searchTerm.trim().toLowerCase();

        return (
            user?.name?.toLowerCase().includes(query) ||
            user?.email?.toLowerCase().includes(query)
        );
    });

    return (
        <section>

            {/* Header */}
            <div className="bg-white border border-border-1 rounded-sm p-5">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Title + Description */}
                    <div>
                        <h1 className="text-xl md:text-2xl font-extrabold text-text-1">
                            Users Management
                        </h1>

                        <p className="mt-1 text-sm text-text-2">
                            Manage all registered users, monitor status, and control access.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-80">
                        <input
                            type="text"
                            name="searchTerm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search user by name or email..."
                            className="w-full h-11 rounded-sm border border-border-1 bg-white pl-11 pr-4 text-sm outline-none focus:border-light-green transition"
                        />

                        <FaSearch
                            size={13}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-3"
                        />
                    </div>
                </div>
            </div>

            {/* Table */}
            {loading ? (
                <div className="flex items-center justify-center mt-10">
                    <Spinner />
                </div>
            ) : (
                <div className="mt-6 overflow-x-auto rounded-sm border border-border-1 bg-white">
                    <table className="w-full min-w-175">
                        {/* Head */}
                        <thead className="border-b border-border-1 bg-bg-white">

                            <tr className="text-left">

                                <th className="px-5 py-4 text-xs font-semibold uppercase text-text-2">
                                    #
                                </th>

                                <th className="px-5 py-4 text-xs font-semibold uppercase text-text-2">
                                    User
                                </th>

                                <th className="px-5 py-4 text-xs font-semibold uppercase text-text-2">
                                    Role
                                </th>

                                <th className="px-5 py-4 text-xs font-semibold uppercase text-text-2">
                                    Status
                                </th>

                                <th className="px-5 py-4 text-xs font-semibold uppercase text-text-2 text-right">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        {/* Body */}
                        <tbody>
                            {
                                filteredUsers.length === 0 ? (
                                    <td colspan="5" className="py-14">
                                        <NoDataFound />
                                    </td>
                                ) : (
                                    filteredUsers?.map((user, index) => (
                                        <tr
                                            key={user._id}
                                            className="border-b border-border-1 last:border-0 hover:bg-bg-white transition"
                                        >

                                            {/* Serial */}
                                            <td className="px-5 py-4 w-4">
                                                <span className="text-sm text-text-2">#{index + 1}</span>
                                            </td>

                                            {/* User */}
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-3">
                                                    {/* Avatar */}
                                                    <div className="w-10 h-10 rounded-full bg-light-green text-white flex items-center justify-center text-sm font-bold uppercase">
                                                        {user?.name?.charAt(0)}
                                                    </div>

                                                    <div>
                                                        <h3 className="text-sm font-semibold text-text-1">
                                                            {user.name}
                                                        </h3>

                                                        <p className="mt-1 text-xs text-text-2">
                                                            {user.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Role */}
                                            <td className="px-5 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${user.role === "admin"
                                                    ? "bg-purple-100 text-purple-600"
                                                    : "bg-blue-100 text-blue-600"
                                                    }`}>
                                                    {user.role}
                                                </span>
                                            </td>

                                            {/* Status */}
                                            <td className="px-5 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${user.isActive
                                                    ? "bg-green-100 text-green-600"
                                                    : "bg-red-100 text-red-600"
                                                    }`}>
                                                    {user.isActive ? "Active" : "Blocked"}
                                                </span>
                                            </td>

                                            {/* Action */}
                                            <td className="px-5 py-4">
                                                <div className="flex justify-end">
                                                    <button
                                                        onClick={() => handleActiveStatus(user._id)}
                                                        className={`w-24 cursor-pointer flex items-center gap-2 rounded-sm border px-3 h-9 text-xs font-medium transition ${user.isActive ? "border-red-200 text-red-500 hover:bg-red-50" : "border-green-200 text-green-600 hover:bg-green-50"}`}
                                                    >
                                                        {
                                                            user.isActive ? (
                                                                <>
                                                                    <FaBan size={11} />
                                                                    Block
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <FaCheckCircle size={11} />
                                                                    Unblock
                                                                </>
                                                            )
                                                        }
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )
                            }


                        </tbody>
                    </table>
                </div >
            )}
        </section >
    );
};

export default Users;