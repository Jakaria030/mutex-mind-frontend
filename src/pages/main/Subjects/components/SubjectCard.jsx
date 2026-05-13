import { Link } from "react-router";
import { FaArrowRight, FaLayerGroup, FaQuestionCircle } from "react-icons/fa";

const typeStyle = {
    Core: "bg-blue-50 text-blue-600",
    Theory: "bg-purple-50 text-purple-600",
    Applied: "bg-amber-50 text-amber-600",
    Advanced: "bg-red-50 text-red-500",
};

const SubjectCard = ({ subject, isLoggedIn = true }) => {

    const progress = (subject.completed / subject.exams) * 100;

    return (
        <div className="group bg-white border border-border-1 rounded-sm p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1">

            {/* Top */}
            <div className="flex items-start justify-between">

                <div className="w-11 h-11 rounded-sm bg-gray-100 flex items-center justify-center text-text-2 group-hover:text-light-green transition">
                    <subject.icon size={18} />
                </div>

                <span className={`text-[10px] px-2 py-1 rounded-full font-semibold ${typeStyle[subject.type]}`}>
                    {subject.type}
                </span>

            </div>

            {/* Title */}
            <h2 className="mt-4 text-sm font-bold text-text-1">
                {subject.name}
            </h2>

            {/* Stats */}
            <div className="mt-3 flex items-center justify-between text-xs text-text-2">
                <div className="flex items-center gap-2">
                    <FaLayerGroup className="text-light-green" size={12} />
                    <span>{subject.exams} Exams</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaQuestionCircle size={12} className="text-light-green" />
                    <span>{subject.quizzes} Qs</span>
                </div>
            </div>

            {/* Progress */}
            {isLoggedIn && (
                <div className="mt-4">

                    <div className="flex justify-between text-[11px] text-text-3 mb-1">
                        <span>Progress</span>
                        <span className="text-text-2 font-medium">
                            {subject.completed}/{subject.exams}
                        </span>
                    </div>

                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-light-green rounded-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                </div>
            )}

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-border-1 flex items-center justify-between">

                <span className="text-xs text-text-2 group-hover:text-text-1 transition">
                    View exams
                </span>

                <Link to={`/subjects/${subject.id}`} className="px-4 py-2 cursor-pointer rounded-sm bg-gray-100 flex items-center justify-center text-text-2 group-hover:bg-light-green group-hover:text-white transition">
                    <FaArrowRight size={11} />
                </Link>

            </div>

        </div>
    );
};

export default SubjectCard;