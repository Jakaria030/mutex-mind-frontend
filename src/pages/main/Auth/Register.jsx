import { Link } from "react-router";
import LeftRightBox from "./components/LeftRightBox";

const Register = () => {
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

                    <form className="mt-6 space-y-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full h-11 border border-border-1 rounded-sm px-3 text-sm outline-none focus:border-light-green"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full h-11 border border-border-1 rounded-sm px-3 text-sm outline-none focus:border-light-green"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full h-11 border border-border-1 rounded-sm px-3 text-sm outline-none focus:border-light-green"
                        />

                        <button className="cursor-pointer w-full h-11 bg-light-green text-white text-sm rounded-sm hover:bg-dark-green transition">
                            Register
                        </button>
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