import { FaChevronDown, FaTrophy } from "react-icons/fa";

const LeaderboardHeader = ({
    selectedSubject,
    setSelectedSubject,
    subjects,
}) => {
    return (
        <div className="relative overflow-hidden rounded-sm border border-border-1 bg-white p-6 md:p-8 mb-6">

            {/* Glow */}
            <div className="absolute top-0 right-0 w-52 h-52 bg-bg-green rounded-full blur-3xl opacity-60"></div>

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                {/* Left */}
                <div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-bg-green text-light-green text-xs font-semibold uppercase tracking-wide">

                        <FaTrophy size={11} />

                        Top Performers

                    </div>

                    <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-text-1">
                        Leaderboard Rankings
                    </h1>

                    <p className="mt-3 max-w-2xl text-text-2 leading-7">
                        Explore the highest scoring learners across ICT exam categories.
                    </p>

                </div>

                {/* Right */}
                <div className="min-w-55">

                    <label className="text-sm font-medium text-text-2 block mb-2">
                        Select Subject
                    </label>

                    <div className="relative">

                        <select
                            value={selectedSubject}
                            onChange={(e) =>
                                setSelectedSubject(e.target.value)
                            }
                            className="appearance-none w-full h-11 rounded-sm border border-border-1 bg-white px-4 pr-10 text-sm outline-none focus:border-light-green"
                        >
                            {subjects.map((subject) => (
                                <option
                                    key={subject}
                                    value={subject}
                                >
                                    {subject}
                                </option>
                            ))}
                        </select>

                        <FaChevronDown
                            size={12}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-3 pointer-events-none"
                        />

                    </div>

                </div>

            </div>

        </div>
    );
};

export default LeaderboardHeader;