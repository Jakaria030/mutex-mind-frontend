import { FaTrophy } from "react-icons/fa";

const CurrentUserRank = ({ currentUser }) => {

    if (!currentUser) return null;

    return (
        <div className="bg-white border border-border-1 rounded-sm p-4 mb-6">

            <div className="flex items-center justify-between">

                {/* Left */}
                <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-sm bg-bg-green flex items-center justify-center text-light-green font-bold text-lg">
                        {currentUser.name.charAt(0)}
                    </div>

                    <div>

                        <h3 className="font-bold text-text-1">
                            {currentUser.name}
                        </h3>

                        <p className="text-sm text-text-3">
                            {currentUser.email}
                        </p>

                    </div>

                </div>

                {/* Right */}
                <div className="text-right">

                    <div className="flex items-center justify-end gap-2 text-light-green font-bold">

                        <FaTrophy size={14} />

                        Rank #{currentUser.rank}

                    </div>

                    <p className="text-sm text-text-2 mt-1">
                        {currentUser.points} Points
                    </p>

                </div>

            </div>

        </div>
    );
};

export default CurrentUserRank;