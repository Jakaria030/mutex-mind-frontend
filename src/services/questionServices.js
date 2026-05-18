import api from "./api";

// ========== Only For Admin ==========
export const createQuestions = async (payload) => {
    const res = await api.post("/questions", payload);
    return res.data;
};