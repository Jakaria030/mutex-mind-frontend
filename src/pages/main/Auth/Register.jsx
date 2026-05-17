import { Link, useNavigate } from "react-router";
import LeftRightBox from "./components/LeftRightBox";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import ErrorMessage from "../../../components/ErrorMessage";

const Register = () => {
    const { register } = useAuth();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

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

        setLoading(true);
        setError("");
        try {
            await register(form);
            navigate("/");
        } catch (err) {
            setError(
                err.response?.data?.message || "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="max-w-5xl mx-auto px-2 sm:px-4 py-8 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 border border-border-1 rounded-sm overflow-hidden bg-white">

                {/* left form */}
                <div className="p-10 flex flex-col justify-center">
                    <h2 className="text-2xl font-extrabold text-text-1">
                        Create Account
                    </h2>

                    <p className="text-sm text-text-2 mt-1">
                        Join and start your exam preparation journey
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full h-11 border border-border-1 rounded-sm px-3 text-sm outline-none focus:border-light-green"
                        />

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
                            {loading ? "Register..." : "Register"}
                        </button>

                        {error && <ErrorMessage error={error} />}
                    </form>

                    <p className="text-xs text-text-3 mt-4 text-center">
                        Already have an account?{" "}
                        <Link to="/login" className="text-light-green">Login</Link>
                    </p>

                </div>

                {/* Right content */}
                <LeftRightBox
                    title="Join Mutex Mind"
                    subtitle="Start practicing exams, track performance, and compete on leaderboard"
                />

            </div>
        </section>
    );
};

export default Register;