import Graph from "./Graph";

const STEPS = [
    {
        title: "Choose Subject",
        description: "Select your subject.",
    },
    {
        title: "Start Practice",
        description: "Solve MCQ quizzes based on real exam patterns.",
    },
    {
        title: "Track Progress",
        description: "Monitor your score, rank, and improvement over time.",
    },
];

const HowItWorks = () => {
    return (
        <section className="bg-navy py-8 md:py-16">
            <div className="max-w-5xl mx-auto px-2 sm:px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side */}
                <div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                        How <span className="text-light-green">Mutex Mind</span> Works
                    </h2>

                    <p className="text-text-3 mt-4 leading-7">
                        A simple learning flow designed to help you prepare faster,
                        practice smarter, and improve your exam performance.
                    </p>

                    {/* Steps List */}
                    <div className="mt-8 space-y-6">

                        {STEPS.map((step, index) => (
                            <div key={index} className="flex gap-4">

                                {/* Dot */}
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-light-green text-navy flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>

                                    {/* vertical line */}
                                    {index !== STEPS.length - 1 && (
                                        <div className="absolute left-1/2 top-10 w-px h-full bg-white/30 -translate-x-1/2"></div>
                                    )}
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="text-white font-semibold">
                                        {step.title}
                                    </h3>
                                    <p className="text-text-3 text-sm mt-1 leading-6">
                                        {step.description}
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>

                {/* Right side graph */}
                <Graph />
            </div>
        </section>
    );
};

export default HowItWorks;