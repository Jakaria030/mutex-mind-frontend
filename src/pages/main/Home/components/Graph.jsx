import { FaRocket, FaBookOpen, FaBrain, FaTrophy } from "react-icons/fa";

const STEPS = [
    {
        label: "Start",
        icon: FaRocket,
        color: "#003D2E",
        height: "h-16"
    },
    {
        label: "Learn",
        icon: FaBookOpen,
        color: "#006B52",
        height: "h-28"
    },
    {
        label: "Practice",
        icon: FaBrain,
        color: "#009E78",
        height: "h-40"
    },
    {
        label: "Success",
        icon: FaTrophy,
        color: "#00C896",
        height: "h-52"
    },
];

const Graph = () => {
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

            {/* Title */}
            <h3 className="text-white font-bold mb-6">
                Performance Growth
            </h3>

            {/* Bars */}
            <div className="flex items-end justify-between gap-4 h-64">

                {STEPS.map((step, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">

                        {/* Top Circle */}
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md mb-2"
                            style={{ backgroundColor: step.color }}
                        >
                            <step.icon size={18} />
                        </div>

                        {/* Label */}
                        <p className="text-xs text-text-3 mb-2">
                            {step.label}
                        </p>

                        {/* Bar */}
                        <div className="flex items-end h-full w-full justify-center">
                            <div
                                className={`${step.height} w-10 rounded-lg transition-all duration-500`}
                                style={{ backgroundColor: step.color }}
                            ></div>
                        </div>

                    </div>
                ))}

            </div>

            {/* Footer hint */}
            <p className="text-xs text-text-3 mt-4 text-center">
                From learning to success progression
            </p>
        </div>
    );
};

export default Graph;