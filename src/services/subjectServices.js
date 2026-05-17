import api from "./api";

// ========== Only For Admin ==========
export const getAllSubjects = async () => {
    const res = await api.get("/subjects");
    return res.data;
};

export const createSubject = async (payload) => {
    const res = await api.post("/subjects", payload);
    return res.data;
};

export const updateSubject = async (id, payload) => {
    const res = await api.patch(`/subjects/${id}`, payload);
    return res.data;
};

export const publishSubject = async (id) => {
    const res = await api.patch(`/subjects/publish/${id}`);
    return res.data;
}
