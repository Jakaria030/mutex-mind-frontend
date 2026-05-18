import { useEffect, useState } from "react";
import { getAllExams } from "../services/examServices";

const useExams = () => {
    const [exams, setExams] = useState([]);
    const [loading, setLoading] = useState(false);

    // Load all exams
    const loadExams = async () => {
        setLoading(true);
        try {
            const res = await getAllExams();
            setExams(res?.data);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadExams();
    }, []);

    return { exams, setExams, loading };
};

export default useExams;