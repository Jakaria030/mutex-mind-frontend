import { FaSearch } from "react-icons/fa";

const SubjectsHeader = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

            {/* Left */}
            <div>

                <h1 className="text-3xl font-extrabold text-text-1">
                    All Subjects List
                </h1>

                <p className="text-text-2 mt-1">
                    Explore topic-based ICT exam preparation.
                </p>

            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">

                <FaSearch
                    size={14}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-3"
                />

                <input
                    type="text"
                    placeholder="Search subjects..."
                    className="w-full h-11 rounded-sm border border-border-1 bg-white pl-11 pr-4 outline-none focus:border-light-green text-sm"
                />

            </div>

        </div>
    );
};

export default SubjectsHeader;