import { Link } from "react-router";
import { formatEmail } from "../../../../utils";
import CountUp from "./CountUp";

const leaderboardUsers = [
    {
        name: "Gulam Jakaria",
        email: "gjakaria99@gmail.com",
        scores: 2840,
        avatar: "G",
        color: "bg-light-purple",
    },
    {
        name: "Nusrat Jahan",
        email: "nusratjahan12@gmail.com",
        scores: 2715,
        avatar: "N",
        color: "bg-light-green",
    },
    {
        name: "Tanvir Ahmed",
        email: "tanvirahmed77@gmail.com",
        scores: 2650,
        avatar: "T",
        color: "bg-blue",
    },
    {
        name: "Mahfuz Rahman",
        email: "mahfuzrahman33@gmail.com",
        scores: 2510,
        avatar: "M",
        color: "bg-amber",
    },
    {
        name: "Rifat Hossain",
        email: "rifathossain10@gmail.com",
        scores: 2440,
        avatar: "R",
        color: "bg-light-purple",
    },
    {
        name: "Gulam Jakaria",
        email: "gjakaria99@gmail.com",
        scores: 2840,
        avatar: "G",
        color: "bg-light-purple",
    },
    {
        name: "Nusrat Jahan",
        email: "nusratjahan12@gmail.com",
        scores: 2715,
        avatar: "N",
        color: "bg-light-green",
    },
    {
        name: "Tanvir Ahmed",
        email: "tanvirahmed77@gmail.com",
        scores: 2650,
        avatar: "T",
        color: "bg-blue",
    },
    {
        name: "Mahfuz Rahman",
        email: "mahfuzrahman33@gmail.com",
        scores: 2510,
        avatar: "M",
        color: "bg-amber",
    },
    {
        name: "Rifat Hossain",
        email: "rifathossain10@gmail.com",
        scores: 2440,
        avatar: "R",
        color: "bg-light-purple",
    },
];

const stats = [
    { label: "Learners", value: 12000, color: "border-light-green" },
    { label: "Subjects", value: 20, color: "border-blue" },
    { label: "Exams", value: 200, color: "border-amber" },
    { label: "Questions", value: 4000, color: "border-light-purple" },
];

const Hero = () => {

    return (
        <section className="max-w-5xl mx-auto px-2 sm:px-4 py-8  md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 items-start">
                {/* LEFT CONTENT */}
                <div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-green border border-light-green/20 mb-5">
                        <div className="w-2 h-2 rounded-full bg-light-green animate-pulse"></div>

                        <span className="text-xs  font-semibold tracking-wide text-dark-green">
                            LEARN • PRACTICE • SUCCEED
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-text-1 animate-fade-up">
                        Lock Your {" "}
                        <span className="text-light-green">
                            Focus. <br /> Unlock
                        </span>
                        {" "} Your Future.
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-text-2 leading-8">
                        Bangladesh&apos;s modern ICT exam preparation platform for NTRCA ICT Lecturer, Bank IT positions like Senior Officer (IT), Assistant Programmer, Assistant Maintenance Engineer, Database Administrator, and other competitive technology recruitment exams.
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mt-7">

                        <span className="px-4 py-2 rounded-full bg-bg-green text-dark-green text-xs font-semibold ">
                            NTRCA ICT
                        </span>

                        <span className="px-4 py-2 rounded-full bg-bg-purple text-light-purple text-xs font-semibold ">
                            Bank IT
                        </span>

                        <span className="px-4 py-2 rounded-full bg-blue/10 text-blue text-xs font-semibold ">
                            SO(IT)
                        </span>

                        <span className="px-4 py-2 rounded-full bg-bg-green text-dark-green text-xs font-semibold ">
                            AP
                        </span>

                        <span className="px-4 py-2 rounded-full bg-bg-purple text-light-purple text-xs font-semibold ">
                            AME
                        </span>

                        <span className="px-4 py-2 rounded-full bg-blue/10 text-blue text-xs font-semibold ">
                            DBA
                        </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-8">

                        <Link to="/subjects" className="px-6 py-2 cursor-pointer rounded-sm bg-light-green hover:bg-dark-green text-white font-medium transition">
                            Start Quiz Now
                        </Link>

                        <Link to="#" className="px-6 py-2 cursor-pointer rounded-sm border border-border-2 hover:border-light-green hover:text-light-green text-text-2 font-medium transition">
                            Get Materials
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">

                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className={`pl-4 border-l-2 ${item.color}`}
                            >
                                <h3 className="text-3xl font-extrabold text-text-1">
                                    <CountUp end={item.value} />
                                    <span className="text-light-green">+</span>
                                </h3>

                                <p className="text-xs tracking-wider text-text-3 mt-1 uppercase">
                                    {item.label}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>

                {/* RIGHT LEADERBOARD */}
                <div className="bg-white border border-border-1 rounded-2xl overflow-hidden shadow-lg animate-fade-up">

                    {/* Header */}
                    <div className="bg-navy px-5 py-4 flex items-center justify-between">
                        <h3 className="text-white  font-bold text-sm tracking-wide">
                            🏆 TOP PERFORMERS
                        </h3>

                        <span className="px-3 py-1 rounded-full bg-light-green text-[10px] font-bold text-navy ">
                            LIVE
                        </span>
                    </div>

                    {/* Table Head */}
                    <div className="grid grid-cols-[50px_1fr_80px] px-5 py-2 border-b border-border-1 bg-bg-purple text-xs font-bold text-text-2 uppercase tracking-wide">
                        <span>Rank</span>
                        <span>Profile</span>
                        <span className="text-right">Scores</span>
                    </div>

                    {/* Users */}
                    <div>

                        {leaderboardUsers.map((user, index) => (

                            <div
                                key={index}
                                className="grid grid-cols-[50px_1fr_80px] items-center px-5 py-2 border-b border-border-1 hover:bg-bg-purple/40 transition"
                            >

                                {/* Rank */}
                                <span className="text-sm font-bold text-text-3">
                                    {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${index + 1}`}
                                </span>

                                {/* Profile */}
                                <div className="flex gap-2">
                                    <div className={`w-8 h-8 rounded-full ${user.color} flex items-center justify-center text-white font-bold text-sm`}>
                                        {user.avatar}
                                    </div>
                                    <div className="flex flex-col gap-px">
                                        <h4 className="text-xs font-semibold text-text-1 truncate">
                                            {user.name}
                                        </h4>

                                        <p className="text-[10px] text-text-3 truncate">
                                            {formatEmail(user.email)}
                                        </p>
                                    </div>
                                </div>

                                {/* Scores */}
                                <div className="text-right">
                                    <span className=" text-sm font-bold text-light-green">
                                        {user.scores}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="px-5 py-4 flex justify-center">
                        <Link to="/leaderboard" className="text-light-green text-sm font-semibold cursor-pointer hover:underline">
                            View Full Leaderboard →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;