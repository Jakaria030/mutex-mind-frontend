const Pagination = ({
    currentPage,
    totalPages,
    setCurrentPage,
}) => {
    return (
        <div className="flex items-center justify-center gap-3 mt-6">

            <button
                disabled={currentPage === 1}
                onClick={() =>
                    setCurrentPage((prev) => prev - 1)
                }
                className="h-10 px-4 rounded-sm border border-border-1 bg-white text-sm font-medium disabled:opacity-40"
            >
                Previous
            </button>

            <div className="text-sm font-semibold text-text-2">
                Page {currentPage} of {totalPages}
            </div>

            <button
                disabled={currentPage === totalPages}
                onClick={() =>
                    setCurrentPage((prev) => prev + 1)
                }
                className="h-10 px-4 rounded-sm bg-light-green text-white text-sm font-medium disabled:opacity-40"
            >
                Next
            </button>

        </div>
    );
};

export default Pagination;