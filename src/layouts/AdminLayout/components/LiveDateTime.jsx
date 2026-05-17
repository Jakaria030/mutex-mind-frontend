import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";

const LiveDateTime = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedDate = dateTime.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const formattedTime = dateTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
    });

    return (
        <div className="flex items-center gap-3 rounded-sm">
            {/* Icon */}
            <div className="w-10 h-10 rounded-sm bg-light-green/10 text-light-green flex items-center justify-center">
                <FaRegClock size={16} />
            </div>

            {/* Content */}
            <div>
                <h3 className="text-sm font-semibold text-text-1">
                    {formattedDate}
                </h3>

                <p className="mt-1 text-xs text-text-2">
                    {formattedTime}
                </p>
            </div>
        </div>
    );
};

export default LiveDateTime;