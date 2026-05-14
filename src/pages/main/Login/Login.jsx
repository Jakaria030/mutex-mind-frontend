import { FcGoogle } from "react-icons/fc";
import { FaShieldAlt, FaChartLine, FaTrophy } from "react-icons/fa";

const Login = () => {
    return (
        <section className="max-w-5xl mx-auto px-2 sm:px-4 py-8 md:py-16 bg-bg-white">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 border border-border-1 rounded-sm overflow-hidden bg-white">
                {/* Left Content */}
                <div className="bg-navy p-8 md:p-10 flex flex-col justify-center">

                    <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase text-light-green">
                        MUTEX MIND • LOGIN
                    </span>

                    <h1 className="mt-5 text-3xl md:text-4xl font-extrabold leading-tight text-white">
                        Continue Your <br />
                        <span className="text-light-green">
                            IT Exam Journey
                        </span>
                    </h1>

                    <p className="mt-4 text-sm md:text-base leading-7 text-gray-300 max-w-md">
                        Sign in with Google to track your progress, participate
                        in leaderboard rankings, and continue practicing IT
                        competitive exam questions.
                    </p>

                    {/* Features */}
                    <div className="mt-8 space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center text-light-green">
                                <FaChartLine size={15} />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-white">
                                    Track Progress
                                </h3>

                                <p className="text-sm text-gray-400 mt-1">
                                    Monitor quiz performance and exam activity.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center text-light-green">
                                <FaTrophy size={15} />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-white">
                                    Compete on Leaderboard
                                </h3>

                                <p className="text-sm text-gray-400 mt-1">
                                    Compare scores with other IT learners.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center text-light-green">
                                <FaShieldAlt size={15} />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-white">
                                    Secure Authentication
                                </h3>

                                <p className="text-sm text-gray-400 mt-1">
                                    Simple and secure Google sign in system.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Login */}
                <div className="p-8 md:p-10 flex flex-col justify-center">

                    <div className="max-w-sm w-full mx-auto">

                        <h2 className="text-2xl font-extrabold text-text-1">
                            Welcome Back
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-text-2">
                            Access your quizzes, progress, leaderboard ranking,
                            and personalized exam preparation dashboard.
                        </p>

                        {/* Login Button */}
                        <button
                            className="w-full mt-8 h-12 rounded-sm border border-border-1 hover:border-light-green bg-white flex items-center justify-center gap-3 text-sm font-medium text-text-1 transition"
                        >
                            <FcGoogle size={22} />

                            Continue with Google
                        </button>

                        {/* Footer */}
                        <p className="mt-6 text-xs leading-6 text-text-3 text-center">
                            By continuing, you agree to the platform terms and
                            authentication policy.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;