import { FaQuoteLeft } from "react-icons/fa";

const Qoute = () => {
    return (
        <section className="bg-white py-8 md:py-16">
            <div className="max-w-5xl mx-auto px-2 sm:px-4">
                <div className="relative overflow-hidden rounded-3xl border border-border-1 bg-bg-white p-8 md:p-16 text-center shadow-sm">
                    {/* Background Glow */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-light-green/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-light-purple/30 rounded-full blur-3xl opacity-60"></div>

                    {/* Quote Icon */}
                    <div className="relative flex justify-center mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-bg-green flex items-center justify-center text-light-green shadow-sm">
                            <FaQuoteLeft size={18} />
                        </div>
                    </div>

                    {/* Quote */}
                    <p className="relative text-xl md:text-2xl leading-10 text-text-2 font-medium italic max-w-3xl mx-auto">
                        “Success is the sum of small efforts, repeated day in and day out.”
                    </p>

                    {/* Divider */}
                    <div className="relative flex items-center justify-center gap-4 mt-8">
                        <div className="w-12 h-px bg-border-2"></div>
                        <span className="text-xs uppercase tracking-[0.3em] text-text-3 font-semibold">
                            Robert Collier
                        </span>
                        <div className="w-12 h-px bg-border-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qoute;