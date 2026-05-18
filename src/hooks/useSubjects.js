import { useEffect, useState } from "react";
import { getAllSubjects } from "../services/subjectServices";

const useSubjects = () => {
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(false);

    // Load all subjects
    const loadSubjects = async () => {
        setLoading(true);
        try {
            const res = await getAllSubjects();
            setSubjects(res?.data?.subjects);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadSubjects();
    }, []);

    return { subjects, setSubjects, loading };
};

export default useSubjects;