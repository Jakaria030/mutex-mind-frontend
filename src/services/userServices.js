import api from "./api";

export const registerUser = async (payload) => {
    const res = await api.post("/users/register", payload);
    return res.data;
};

export const loginUser = async (payload) => {
    const res = await api.post("/users/login", payload);
    return res.data;
};

export const logoutUser = async () => {
    const res = await api.post("/users/logout");
    return res.data;
};

export const getProfile = async () => {
    const res = await api.get("/users/profile");
    return res.data;
};

export const updateUserProfile = async (payload) => {
    const res = await api.patch("/users/profile", payload);
    return res.data;
};

export const changeUserPassword = async (payload) => {
    const res = await api.patch("/users/change-password", payload);
    return res.data;
};
