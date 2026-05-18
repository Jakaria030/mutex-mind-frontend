import {
    FaToggleOn,
    FaToggleOff,
    FaEdit,
} from "react-icons/fa";
import { subjectIconMap } from "../../../../lib/subjectIconMap";

const SubjectCard = ({ subject, onPublish, onEdit }) => {
    return (
        <div
            className="group relative overflow-hidden rounded-sm border border-border-1 bg-white p-5 hover:border-light-green transition"
        >
            {/* TOP */}
            <div className="flex items-start justify-between gap-4">

                {/* Icon */}
                <div className="w-14 h-14 rounded-sm bg-light-green/10 text-light-green flex items-center justify-center group-hover:bg-light-green group-hover:text-white transition">
                    {subjectIconMap[subject.iconName]}
                </div>

                {/* Category */}
                <span
                    style={{
                        backgroundColor: `${subject.categoryColor}20`,
                        color: subject.categoryColor,
                        borderColor: `${subject.categoryColor}40`,
                    }}
                    className="px-3 py-1 rounded-full text-xs font-medium border">
                    {subject.category}
                </span>
            </div>

            {/* CONTENT */}
            <div className="mt-5">

                <h2 className="text-lg font-bold text-text-1">
                    {subject.name}
                </h2>

                <p className="mt-2 text-sm text-text-2">
                    Slug: /{subject.slug}
                </p>

                {/* STATUS BADGE */}
                <div className="mt-3 flex items-center gap-2">
                    <span
                        className={`text-xs px-2 py-1 rounded-sm font-medium ${subject.isPublished
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                            }`}
                    >
                        {subject.isPublished ? "Published" : "Unpublished"}
                    </span>
                </div>

            </div>

            {/* ACTIONS */}
            <div className="mt-5 pt-4 border-t border-border-1 flex items-center justify-between">

                {/* Publish / Unpublish */}
                <button
                    onClick={() => onPublish(subject._id)}
                    className="flex items-center cursor-pointer gap-2 px-3 py-2 text-xs font-medium rounded-sm border border-light-green text-light-green"
                >
                    {subject.isPublished ? (
                        <>
                            <FaToggleOn />
                            Unpublish
                        </>
                    ) : (
                        <>
                            <FaToggleOff />
                            Publish
                        </>
                    )}
                </button>

                {/* Edit */}
                <button
                    onClick={() => onEdit(subject)}
                    className="flex items-center cursor-pointer gap-2 px-3 py-2 text-xs font-medium rounded-sm border border-light-green bg-light-green text-white"
                >
                    <FaEdit />
                    Edit
                </button>

            </div>

        </div>
    );
};

export default SubjectCard;