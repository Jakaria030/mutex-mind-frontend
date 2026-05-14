import {
    FaFire,
    FaMedal,
    FaTrophy,
} from "react-icons/fa";

const LeaderboardTable = ({ data, currentPage }) => {

    return (
        <div className="bg-white border border-border-1 rounded-sm overflow-hidden">

            {/* Header */}
            <div className="grid grid-cols-[70px_1fr_120px] items-center px-5 py-4 border-b border-border-1 bg-gray-50">

                <h3 className="text-xs uppercase tracking-wider font-bold text-text-3">
                    Rank
                </h3>

                <h3 className="text-xs uppercase tracking-wider font-bold text-text-3">
                    User
                </h3>

                <h3 className="text-xs uppercase tracking-wider font-bold text-text-3 text-right">
                    Points
                </h3>

            </div>

            {/* Rows */}
            {data.map((user, index) => {

                const rank =
                    (currentPage - 1) * 20 + index + 1;

                return (
                    <div
                        key={user.id}
                        className="grid grid-cols-[70px_1fr_120px] items-center px-5 py-4 border-b border-border-1 last:border-none hover:bg-gray-50 transition"
                    >

                        {/* Rank */}
                        <div>

                            {rank === 1 ? (
                                <div className="w-9 h-9 rounded-sm bg-bg-green flex items-center justify-center text-light-green">
                                    <FaTrophy size={15} />
                                </div>
                            ) : rank === 2 ? (
                                <div className="w-9 h-9 rounded-sm bg-gray-100 flex items-center justify-center text-text-2">
                                    <FaMedal size={15} />
                                </div>
                            ) : rank === 3 ? (
                                <div className="w-9 h-9 rounded-sm bg-amber-50 flex items-center justify-center text-amber-500">
                                    <FaFire size={15} />
                                </div>
                            ) : (
                                <span className="text-sm font-bold text-text-2">
                                    #{String(rank).padStart(2, "0")}
                                </span>
                            )}

                        </div>

                        {/* User */}
                        <div className="flex items-center gap-3">

                            <div className="w-11 h-11 rounded-sm bg-bg-green flex items-center justify-center text-light-green font-bold text-lg">
                                {user.name.charAt(0)}
                            </div>

                            <div>

                                <h3 className="font-semibold text-text-1">
                                    {user.name}
                                </h3>

                                <p className="text-sm text-text-3">
                                    {user.email}
                                </p>

                            </div>

                        </div>

                        {/* Points */}
                        <div className="text-right">

                            <h3 className="text-lg font-extrabold text-text-1">
                                {user.points}
                            </h3>

                            <p className="text-xs text-light-green uppercase tracking-wide">
                                Score
                            </p>

                        </div>

                    </div>
                );
            })}
        </div>
    );
};

export default LeaderboardTable;