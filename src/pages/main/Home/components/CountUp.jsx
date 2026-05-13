import { useEffect, useState } from "react";

const CountUp = ({ end, duration = 1500 }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration / 16);

        const counter = setInterval(() => {
            start += increment;

            if (start >= end) {
                start = end;
                clearInterval(counter);
            }

            setValue(Math.floor(start));
        }, 16);

        return () => clearInterval(counter);
    }, [end, duration]);

    // format K
    const format = (num) => {
        if (num >= 1000) return (num / 1000).toFixed(1) + "k";
        return num;
    };

    return <>{format(value)}</>;
};

export default CountUp;