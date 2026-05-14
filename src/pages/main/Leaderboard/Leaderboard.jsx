import { useMemo, useState } from "react";

import LeaderboardHeader from "./components/LeaderboardHeader";
import CurrentUserRank from "./components/CurrentUserRank";
import LeaderboardTable from "./components/LeaderboardTable";
import Pagination from "./components/Pagination";

export const subjects = [
    "All Subjects",
    "Operating System",
    "Networking",
    "Database",
    "Software Engineering",
    "Data Structure",
    "Digital Logic",
];

export const leaderboardData = [
    {
        id: 1,
        name: "Gulam Jakaria",
        email: "gj.....99@gmail.com",
        points: 2840,
        subject: "Operating System",
    },
    {
        id: 2,
        name: "Rakib Hasan",
        email: "ra.....10@gmail.com",
        points: 2715,
        subject: "Networking",
    },
    {
        id: 3,
        name: "Nusrat Jahan",
        email: "nu.....22@gmail.com",
        points: 2640,
        subject: "Database",
    },
    {
        id: 4,
        name: "Gulam Jakaria",
        email: "gj.....99@gmail.com",
        points: 2840,
        subject: "Operating System",
    },
    {
        id: 5,
        name: "Rakib Hasan",
        email: "ra.....10@gmail.com",
        points: 2715,
        subject: "Networking",
    },
    {
        id: 6,
        name: "Nusrat Jahan",
        email: "nu.....22@gmail.com",
        points: 2640,
        subject: "Database",
    },
    {
        id: 7,
        name: "Gulam Jakaria",
        email: "gj.....99@gmail.com",
        points: 2840,
        subject: "Operating System",
    },
    {
        id: 8,
        name: "Rakib Hasan",
        email: "ra.....10@gmail.com",
        points: 2715,
        subject: "Networking",
    },
    {
        id: 9,
        name: "Nusrat Jahan",
        email: "nu.....22@gmail.com",
        points: 2640,
        subject: "Database",
    },
    {
        id: 10,
        name: "Gulam Jakaria",
        email: "gj.....99@gmail.com",
        points: 2840,
        subject: "Operating System",
    },
    {
        id: 11,
        name: "Rakib Hasan",
        email: "ra.....10@gmail.com",
        points: 2715,
        subject: "Networking",
    },
    {
        id: 12,
        name: "Nusrat Jahan",
        email: "nu.....22@gmail.com",
        points: 2640,
        subject: "Database",
    },
    {
        id: 13,
        name: "Gulam Jakaria",
        email: "gj.....99@gmail.com",
        points: 2840,
        subject: "Operating System",
    },
    {
        id: 14,
        name: "Rakib Hasan",
        email: "ra.....10@gmail.com",
        points: 2715,
        subject: "Networking",
    },
    {
        id: 15,
        name: "Nusrat Jahan",
        email: "nu.....22@gmail.com",
        points: 2640,
        subject: "Database",
    },
    {
        id: 16,
        name: "Gulam Jakaria",
        email: "gj.....99@gmail.com",
        points: 2840,
        subject: "Operating System",
    },
    {
        id: 17,
        name: "Rakib Hasan",
        email: "ra.....10@gmail.com",
        points: 2715,
        subject: "Networking",
    },
    {
        id: 18,
        name: "Nusrat Jahan",
        email: "nu.....22@gmail.com",
        points: 2640,
        subject: "Database",
    },
    {
        id: 19,
        name: "Gulam Jakaria",
        email: "gj.....99@gmail.com",
        points: 2840,
        subject: "Operating System",
    },
    {
        id: 20,
        name: "Rakib Hasan",
        email: "ra.....10@gmail.com",
        points: 2715,
        subject: "Networking",
    },
];

const Leaderboard = () => {

    const [selectedSubject, setSelectedSubject] =
        useState("All Subjects");

    const [currentPage, setCurrentPage] =
        useState(1);

    const ITEMS_PER_PAGE = 20;

    // fake login user
    const loggedInUserEmail =
        "gj.....99@gmail.com";

    // filter
    const filteredLeaderboard =
        selectedSubject === "All Subjects"
            ? leaderboardData
            : leaderboardData.filter(
                (item) =>
                    item.subject === selectedSubject
            );

    // pagination
    const totalPages = Math.ceil(
        filteredLeaderboard.length /
        ITEMS_PER_PAGE
    );

    const paginatedData =
        filteredLeaderboard.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            currentPage * ITEMS_PER_PAGE
        );

    // current user rank
    const currentUser = useMemo(() => {

        const sorted = [...filteredLeaderboard]
            .sort((a, b) => b.points - a.points);

        const userIndex = sorted.findIndex(
            (user) =>
                user.email === loggedInUserEmail
        );

        if (userIndex === -1) return null;

        return {
            ...sorted[userIndex],
            rank: userIndex + 1,
        };

    }, [filteredLeaderboard]);

    return (
        <section className="max-w-5xl mx-auto px-2 sm:px-4 py-8 md:py-16">

            <LeaderboardHeader
                selectedSubject={selectedSubject}
                setSelectedSubject={setSelectedSubject}
                subjects={subjects}
            />

            <CurrentUserRank
                currentUser={currentUser}
            />

            <LeaderboardTable
                data={paginatedData}
                currentPage={currentPage}
            />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />

        </section>
    );
};

export default Leaderboard;