const ErrorMessage = ({ error }) => {
    return (
        <div className="mt-2 rounded-r-sm border-l-4 border-red-500 bg-red-50 px-3 py-2 text-xs text-red-700">
            <p className="font-medium">
                ⚠ {error}
            </p>
        </div>
    );
};

export default ErrorMessage;