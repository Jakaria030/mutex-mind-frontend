import { FaGraduationCap, FaChartLine, FaTrophy } from "react-icons/fa";

const LeftRightBox = ({ title, subtitle }) => {
    return (
        <div className="relative bg-linear-to-br from-[#0B1B2B] to-[#0F2A3D] p-10 flex flex-col justify-center text-white overflow-hidden">

            {/* glow background */}
            <div className="absolute w-72 h-72 bg-light-green/10 blur-3xl rounded-full -top-20 -left-20"></div>
            <div className="absolute w-72 h-72 bg-light-green/10 blur-3xl rounded-full bottom-0 right-0"></div>

            {/* Top badge */}
            <span className="relative inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase text-light-green tracking-widest">
                MUTEX MIND PLATFORM
            </span>

            {/* Title */}
            <h1 className="relative mt-5 text-3xl md:text-4xl font-extrabold leading-tight">
                {title}
            </h1>

            <p className="relative mt-3 text-sm md:text-base text-gray-300 leading-6 max-w-md">
                {subtitle}
            </p>

            {/* Feature cards */}
            <div className="relative mt-8 space-y-4">

                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center text-light-green">
                        <FaChartLine size={14} />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Track Progress</h3>
                        <p className="text-xs text-gray-400">Monitor your exam growth easily</p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center text-light-green">
                        <FaTrophy size={14} />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Leaderboard</h3>
                        <p className="text-xs text-gray-400">Compete with other learners</p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center text-light-green">
                        <FaGraduationCap size={14} />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Exam Practice</h3>
                        <p className="text-xs text-gray-400">Real exam simulation experience</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftRightBox;