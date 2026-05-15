import { createContext, useContext, useEffect, useState } from "react";
import { changeUserPassword, getProfile, loginUser, logoutUser, registerUser, updateUserProfile } from "../services/userServices";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Register
    const register = async (data) => {
        const res = await registerUser(data);

        localStorage.setItem("accessToken", res?.data?.accessToken);
        localStorage.setItem("refreshToken", res?.data?.refreshToken);

        setUser(res?.data?.user);

        return res;
    };

    // Login
    const login = async (data) => {
        const res = await loginUser(data);

        localStorage.setItem("accessToken", res?.data?.accessToken);
        localStorage.setItem("refreshToken", res?.data?.refreshToken);

        setUser(res?.data?.user);

        return res;
    };

    // Logout
    const logout = async () => {
        await logoutUser();

        setUser(null);

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
    };

    // Update profile
    const updateProfile = async (data) => {
        const res = await updateUserProfile(data);

        setUser(res?.data?.user);

        return res;
    };

    // Change password
    const changePassword = async (data) => {
        const res = await changeUserPassword(data);

        return res;
    };

    // Load user
    const loadUser = async () => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            const res = await getProfile();
            setUser(res?.data?.user);
        } catch {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout, updateProfile, changePassword }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);