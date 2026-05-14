import { FaFacebookF, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="max-w-5xl mx-auto px-2 sm:px-4 py-8 md:py-14">

            {/* Header */}
            <div className="border border-border-1 rounded-sm bg-white p-6 md:p-8">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-light-green">
                    CONTACT • SUPPORT
                </span>

                <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-text-1 leading-tight">
                    Contact Mutex Mind
                </h1>

                <p className="mt-3 text-text-2 max-w-2xl leading-7">
                    Have a question, suggestion, bug report, or feedback?
                    Send us a message anytime. We&apos;re always working to improve
                    the learning experience for ICT exam preparation.
                </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">

                {/* Left Info */}
                <div className="space-y-5">

                    {/* Facebook */}
                    <div className="border border-border-1 rounded-sm bg-white p-5">
                        <div className="w-11 h-11 rounded-sm bg-bg-green flex items-center justify-center text-light-green">
                            <FaFacebookF size={16} />
                        </div>

                        <h3 className="mt-4 text-lg font-bold text-text-1">
                            Facebook Page
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-text-2">
                            Follow our Facebook page for updates, exam notices,
                            quiz announcements, and study discussions.
                        </p>

                        <a
                            href="#"
                            className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-light-green hover:text-dark-green transition"
                        >
                            Visit Facebook
                        </a>
                    </div>

                    {/* Email */}
                    <div className="border border-border-1 rounded-sm bg-white p-5">
                        <div className="w-11 h-11 rounded-sm bg-bg-purple flex items-center justify-center text-light-purple">
                            <FaEnvelope size={16} />
                        </div>

                        <h3 className="mt-4 text-lg font-bold text-text-1">
                            Email Support
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-text-2">
                            For support, collaboration, or platform-related
                            inquiries, feel free to send us a message.
                        </p>

                        <p className="mt-4 text-sm font-medium text-text-3">
                            {/* support@mutexmind.com */} support email comming soon
                        </p>
                    </div>

                    {/* Quick Info */}
                    <div className="border border-border-1 rounded-sm bg-white p-5">
                        <div className="flex items-center gap-3">

                            <div className="w-11 h-11 rounded-sm bg-bg-green flex items-center justify-center text-light-green">
                                <FaPaperPlane size={15} />
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-text-1">
                                    Response Time
                                </h3>

                                <p className="text-sm text-text-2 mt-1">
                                    Usually within 24 hours
                                </p>
                            </div>

                        </div>

                        <div className="mt-4 pt-4 border-t border-border-1">
                            <p className="text-sm leading-6 text-text-2">
                                We read every message carefully to improve the platform and help learners prepare better for ICT competitive exams.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2 border border-border-1 rounded-sm bg-white p-5 md:p-7">

                    <div className="flex items-center gap-2 text-light-green text-sm font-semibold tracking-wide uppercase">
                        <FaPaperPlane size={12} />
                        Send Message
                    </div>

                    <h2 className="mt-3 text-2xl font-bold text-text-1">
                        Let&apos;s Talk
                    </h2>

                    <p className="mt-2 text-sm text-text-2 leading-6">
                        Ask anything related to exams, subjects, quizzes, or
                        share your suggestions to improve the platform.
                    </p>

                    <form className="mt-6 space-y-5">

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-text-1 mb-2">
                                Your Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full h-11 px-4 rounded-sm border border-border-1 bg-white outline-none focus:border-light-green text-sm"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-text-1 mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full h-11 px-4 rounded-sm border border-border-1 bg-white outline-none focus:border-light-green text-sm"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-text-1 mb-2">
                                Message
                            </label>

                            <textarea
                                rows="11"
                                placeholder="Write your message or suggestion..."
                                className="w-full px-4 py-3 rounded-sm border border-border-1 bg-white outline-none focus:border-light-green text-sm resize-none"
                            ></textarea>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="h-11 px-6 rounded-sm bg-light-green text-white font-medium hover:bg-dark-green transition"
                        >
                            Send Message
                        </button>

                    </form>
                </div>
            </div>

            {/* Bottom Info */}
            <div className="mt-5 border border-border-1 rounded-sm bg-white p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>
                    <h3 className="text-lg font-bold text-text-1">
                        Mutex Mind Community
                    </h3>

                    <p className="mt-1 text-sm text-text-2 leading-6">
                        Learn consistently, practice daily, and improve your ICT
                        exam preparation step by step.
                    </p>
                </div>

                <a
                    href="#"
                    className="inline-flex items-center justify-center h-11 px-5 rounded-sm border border-border-1 hover:border-light-green hover:text-light-green transition text-sm font-medium"
                >
                    Join Facebook Community
                </a>
            </div>
        </section>
    );
};

export default Contact;