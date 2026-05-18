import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

import AddSubjectForm from "./components/AddSubjectForm";
import SubjectCard from "./components/SubjectCard";
import NoDataFound from "../../../components/NoDataFound";
import Spinner from "../../../components/Spinner";
import { getAllSubjects, publishSubject } from "../../../services/subjectServices";


const AddSubject = () => {
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editedData, setEditedData] = useState(null);

    const [searchTerm, setSearchTerm] = useState("");


    // Handle subject publish
    const handlePublish = async (id) => {
        try {
            await publishSubject(id);
            const updatedSubjects = subjects.map((subject) => {
                if (subject._id === id) {
                    return {
                        ...subject,
                        isPublished: !subject.isPublished
                    };
                }
                return subject;
            });

            setSubjects(updatedSubjects);
        } catch (err) {
            console.log(err);
        }
    };

    // Handle edit subject
    const handleEdit = async (data) => {
        setEditedData(data);
    }

    // Load all subjects
    const loadSubjects = async () => {
        setLoading(true);
        try {
            const res = await getAllSubjects();
            setSubjects(res?.data?.subjects);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadSubjects();
    }, []);

    // Search subject
    const filteredSubjects = subjects?.filter((subject) =>
        subject?.name?.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );

    return (
        <section className="h-[calc(100vh-120px)] overflow-y-auto">

            {/* Header */}
            <div className="bg-white border border-border-1 rounded-sm p-5">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                    {/* Title */}
                    <div>
                        <h1 className="text-2xl font-extrabold text-text-1">
                            Subject Management
                        </h1>

                        <p className="mt-2 text-sm text-text-2 max-w-2xl leading-6">
                            Manage all subjects used for quizzes and exams.
                            Add new subjects, assign categories, and customize
                            icons for better visual organization.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="relative w-full lg:w-80">

                        <input
                            type="text"
                            placeholder="Search subject..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full h-11 rounded-sm border border-border-1 bg-white pl-11 pr-4 text-sm outline-none focus:border-light-green transition"
                        />

                        <FaSearch
                            size={13}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-3"
                        />

                    </div>

                </div>

            </div>

            {/* Body */}
            <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Subjects */}
                {
                    loading ? (
                        <div className="xl:col-span-2 flex items-center justify-center bg-white">
                            <Spinner />
                        </div>
                    ) : (
                        <div className="xl:col-span-2">
                            {
                                filteredSubjects.length === 0 ? (
                                    <div className="w-full bg-white py-14">
                                        <NoDataFound />
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {filteredSubjects?.map((subject) => (
                                            <SubjectCard key={subject._id} subject={subject} onPublish={handlePublish} onEdit={handleEdit} />
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    )
                }

                {/* Add Form */}
                <AddSubjectForm
                    subjects={subjects}
                    onSetSubjects={setSubjects}
                    editedData={editedData}
                    onEditedData={setEditedData}
                />

            </div>

        </section >
    );
};

export default AddSubject;