import {
    FaGlobe,
    FaDatabase,
    FaCogs,
    FaBrain,
    FaMicrochip,
    FaCode,
    FaLaptopCode,
} from "react-icons/fa";

import SubjectCard from "./components/SubjectCard";
import SubjectsHeader from "./components/SubjetctsHeader";

const subjects = [
    {
        id: 0,
        name: "All Subjects",
        exams: 120,
        quizzes: 4200,
        completed: 62,
        icon: FaLaptopCode,
        type: "Core",
    },
    {
        id: 1,
        name: "Operating System",
        exams: 24,
        quizzes: 820,
        completed: 12,
        icon: FaCode,
        type: "Core",
    },
    {
        id: 2,
        name: "Networking",
        exams: 18,
        quizzes: 640,
        completed: 7,
        icon: FaGlobe,
        type: "Applied",
    },
    {
        id: 3,
        name: "Database",
        exams: 20,
        quizzes: 710,
        completed: 10,
        icon: FaDatabase,
        type: "Core",
    },
    {
        id: 4,
        name: "Software Engineering",
        exams: 15,
        quizzes: 530,
        completed: 5,
        icon: FaCogs,
        type: "Theory",
    },
    {
        id: 5,
        name: "Data Structure",
        exams: 28,
        quizzes: 980,
        completed: 18,
        icon: FaBrain,
        type: "Core",
    },
    {
        id: 6,
        name: "Digital Logic",
        exams: 12,
        quizzes: 430,
        completed: 4,
        icon: FaMicrochip,
        type: "Theory",
    },
    {
        id: 7,
        name: "Compiler",
        exams: 10,
        quizzes: 280,
        completed: 2,
        icon: FaCode,
        type: "Advanced",
    },
];

const Subjects = () => {
    return (
        <section className="max-w-5xl mx-auto px-2 sm:px-4 py-8 md:py-16">

            <SubjectsHeader />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {subjects.map((subject) => (
                    <SubjectCard
                        key={subject.id}
                        subject={subject}
                        isLoggedIn={true}
                    />
                ))}

            </div>

        </section>
    );
};

export default Subjects;