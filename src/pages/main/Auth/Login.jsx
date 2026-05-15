import { Link, useLocation, useNavigate } from "react-router";
import LeftRightBox from "./components/LeftRightBox";
import { useAuth } from "../../../context/AuthContext";
import { useState } from "react";

const Login = () => {
    const { login } = useAuth();
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    // Handle change form value
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // Handle submit form value
    const handleSubmit = async (e) => {
        e.preventDefault();

        const from = location.state?.from?.pathname || "/";

        setLoading(true);
        setError("");
        try {
            await login(form);
            navigate(from, { replace: true });
        } catch (err) {
            setError(
                err.response?.data?.message || "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="max-w-5xl mx-auto px-2 sm:px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 border border-border-1 rounded-sm overflow-hidden bg-white">
                {/* Left content */}
                <LeftRightBox
                    title="Welcome Back"
                    subtitle="Continue your exam journey, track progress, and improve your ranking"
                />

                {/* Right form */}
                <div className="p-10 flex flex-col justify-center">
                    <h2 className="text-2xl font-extrabold text-text-1">
                        Login
                    </h2>

                    <p className="text-sm text-text-2 mt-1">
                        Enter your email and password
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full h-11 border border-border-1 rounded-sm px-3 text-sm outline-none focus:border-light-green"
                        />

                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full h-11 border border-border-1 rounded-sm px-3 text-sm outline-none focus:border-light-green"
                        />

                        <button type="submit" className="cursor-pointer w-full h-11 bg-light-green text-white text-sm rounded-sm hover:bg-dark-green transition">
                            {loading ? "Login..." : "Login"}
                        </button>

                        {error && (
                            <div className="rounded-r-sm border-l-4 border-red-500 bg-red-50 px-3 py-2 text-xs text-red-700">
                                <p className="font-medium">
                                    ⚠ {error}
                                </p>
                            </div>
                        )}
                    </form>

                    <p className="text-xs text-text-3 mt-4 text-center">
                        Don&apos;t have an account?{" "}
                        <Link to="/register" className="text-light-green">Register</Link>
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Login;