const NoDataFound = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 rounded-full bg-light-green/10 flex items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-light-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 13h6m-6 4h6M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z"
                    />
                </svg>
            </div>

            <h3 className="mt-4 text-sm font-semibold text-text-1">
                No Data Found
            </h3>

            <p className="mt-1 text-xs text-text-2">
                There is currently no data available.
            </p>
        </div>
    );
};

export default NoDataFound;