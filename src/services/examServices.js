import api from "./api";

// ========== Only For Admin ==========
export const createExam = async (payload) => {
    const res = await api.post("/exams", payload);
    return res.data;
};

export const getAllExams = async () => {
    const res = await api.get("/exams");
    return res.data;
};

export const publishExam = async (id) => {
    const res = await api.patch(`/exams/publish/${id}`);
    return res.data;
}

export const updateExam = async (id, payload) => {
    const res = await api.patch(`/exams/${id}`, payload);
    return res.data;
}