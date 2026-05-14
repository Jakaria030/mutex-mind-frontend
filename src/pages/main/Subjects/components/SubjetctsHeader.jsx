import { FaBookOpen, FaLayerGroup } from "react-icons/fa";

const SubjectsHeader = () => {
    return (
        <div className="relative overflow-hidden rounded-sm border border-border-1 bg-white p-6 md:p-8 mb-8">

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-52 h-52 bg-bg-green rounded-full blur-3xl opacity-60"></div>

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                {/* Left Content */}
                <div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-bg-green text-light-green text-xs font-semibold tracking-wide uppercase">

                        <FaBookOpen size={12} />

                        ICT Preparation Hub

                    </div>

                    {/* Title */}
                    <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-text-1 leading-tight">
                        All Subjects List
                    </h1>

                    {/* Description */}
                    <p className="mt-3 max-w-2xl text-text-2 leading-7">
                        Practice subject-based ICT exams, improve problem-solving skills,
                        and prepare for competitive technology recruitment exams in Bangladesh.
                    </p>

                </div>

                {/* Right Stats */}
                <div className="grid grid-cols-2 gap-4 min-w-fit">

                    <div className="border border-border-1 rounded-sm bg-bg-green px-5 py-4 min-w-[120px]">

                        <div className="flex items-center gap-2 text-light-green">

                            <FaLayerGroup size={14} />

                            <span className="text-xs font-semibold uppercase tracking-wide">
                                Subjects
                            </span>

                        </div>

                        <h3 className="mt-2 text-2xl font-extrabold text-text-1">
                            20+
                        </h3>

                    </div>

                    <div className="border border-border-1 rounded-sm bg-white px-5 py-4 min-w-[120px]">

                        <div className="flex items-center gap-2 text-text-2">

                            <FaBookOpen size={14} />

                            <span className="text-xs font-semibold uppercase tracking-wide">
                                Exams
                            </span>

                        </div>

                        <h3 className="mt-2 text-2xl font-extrabold text-text-1">
                            200+
                        </h3>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default SubjectsHeader;