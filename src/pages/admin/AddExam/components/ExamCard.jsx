import {
    FaClock,
    FaQuestionCircle,
    FaToggleOn,
    FaToggleOff,
    FaEdit,
    FaBookOpen,
} from "react-icons/fa";
import { subjectIconMap } from "../../../../lib/subjectIconMap";

const ExamCard = ({ exam, onPublish, onEdit }) => {

    // Difficulty style
    const getLevelStyle = (level) => {
        switch (level) {
            case "easy":
                return "bg-green-50 text-green-600 border-green-200";

            case "medium":
                return "bg-amber-50 text-amber-600 border-amber-200";

            case "hard":
                return "bg-red-50 text-red-600 border-red-200";

            default:
                return "bg-gray-50 text-gray-600 border-gray-200";
        }
    };

    return (
        <div className="group border border-border-1 bg-white rounded-sm p-5 hover:border-light-green transition-all duration-300">

            {/* Top */}
            <div className="flex items-start justify-between gap-4">

                {/* Left */}
                <div className="flex items-start gap-4">

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-sm bg-light-green/10 text-light-green flex items-center justify-center group-hover:bg-light-green group-hover:text-white transition">
                        {subjectIconMap[exam.subject.iconName]}
                    </div>

                    {/* Title + Subject */}
                    <div>

                        <h3 className="text-base font-bold text-text-1">
                            {exam.name}
                        </h3>

                        <p className="mt-1 text-xs text-text-2">
                            {exam.subject?.name || "Unknown Subject"}
                        </p>

                    </div>

                </div>

                {/* Difficulty */}
                <span
                    className={`text-[10px] px-2 py-1 rounded-full border font-medium uppercase tracking-wider ${getLevelStyle(
                        exam.difficulty
                    )}`}
                >
                    {exam.difficulty}
                </span>

            </div>

            {/* Description */}
            {
                exam.description && (
                    <p className="mt-4 text-sm leading-6 text-text-2 line-clamp-2">
                        {exam.description}
                    </p>
                )
            }

            {/* Stats */}
            <div className="mt-4 flex items-center justify-between text-xs text-text-2">
                <div className="flex items-center gap-2">
                    <FaQuestionCircle className="text-light-green" />
                    <span>{exam.totalQuestions} Questions</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaClock className="text-light-green" />
                    <span>{exam.duration} min</span>
                </div>
            </div>

            {/* Status */}
            <div className="mt-4">

                <span
                    className={`text-xs px-2 py-1 rounded-sm font-medium ${exam.isPublished
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                        }`}
                >
                    {exam.isPublished ? "Published" : "Unpublished"}
                </span>

            </div>

            {/* Actions */}
            <div className="mt-5 pt-4 border-t border-border-1 flex items-center justify-between">

                {/* Publish */}
                <button
                    onClick={() => onPublish(exam._id)}
                    className="flex items-center gap-2 px-3 py-2 rounded-sm border border-light-green text-light-green text-xs font-medium cursor-pointer hover:bg-light-green hover:text-white transition"
                >
                    {
                        exam.isPublished ? (
                            <>
                                <FaToggleOn />
                                Unpublish
                            </>
                        ) : (
                            <>
                                <FaToggleOff />
                                Publish
                            </>
                        )
                    }
                </button>

                {/* Edit */}
                <button
                    onClick={() => onEdit(exam)}
                    className="flex items-center gap-2 px-3 py-2 rounded-sm bg-light-green text-white text-xs font-medium cursor-pointer hover:bg-dark-green transition"
                >
                    <FaEdit />
                    Edit
                </button>

            </div>

        </div>
    );
};

export default ExamCard;