const Message = ({ type = "error", message }) => {
    const styles =
        type === "success"
            ? "border-green-500 bg-green-50 text-green-700"
            : "border-red-500 bg-red-50 text-red-700";

    const icon = type === "success" ? "✅" : "⚠";

    return (
        <div className={`mt-2 rounded-r-sm border-l-4 px-3 py-2 text-xs ${styles}`}>
            <p className="font-medium">
                {icon} {message}
            </p>
        </div>
    );
};

export default Message;