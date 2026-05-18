import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useSubjects from "../../../hooks/useSubjects";
import useExams from "../../../hooks/useExams";
import Spinner from "../../../components/Spinner";
import NoDataFound from "../../../components/NoDataFound";
import ExamCard from "./components/ExamCard";
import { publishExam } from "../../../services/examServices";
import AddExamForm from "./components/AddExamForm";

const AddExam = () => {
    const { subjects } = useSubjects();
    const { exams, setExams, loading } = useExams();
    const [editedData, setEditedData] = useState(null);

    const [searchTerm, setSearchTerm] = useState("");

    // Handle subject publish
    const handlePublish = async (id) => {
        try {
            await publishExam(id);
            const updatedExams = exams.map((exam) => {
                if (exam._id === id) {
                    return {
                        ...exam,
                        isPublished: !exam.isPublished
                    };
                }
                return exam;
            });

            setExams(updatedExams);
        } catch (err) {
            console.log(err);
        }
    };

    // Handle edit subject
    const handleEdit = async (data) => {
        setEditedData(data);
    }

    // Handle search exam
    const filterExams = exams.filter((exam) => {
        const query = searchTerm.trim().toLowerCase();

        return (
            exam?.name?.toLowerCase().includes(query) ||
            exam?.subject.name?.toLowerCase().includes(query) ||
            exam?.difficulty?.toLowerCase().includes(query)
        );
    });;

    return (
        <section className="h-[calc(100vh-120px)] overflow-y-auto">

            {/* Header */}
            <div className="bg-white border border-border-1 rounded-sm p-5">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                    {/* Title */}
                    <div>
                        <h1 className="text-2xl font-extrabold text-text-1">
                            Exam Management
                        </h1>

                        <p className="mt-2 text-sm text-text-2 max-w-2xl leading-6">
                            Set up a new exam by selecting subject, defining difficulty, duration, and total questions. Publish it when ready for students.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="relative w-full lg:w-80">

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search exam..."
                            className="w-full h-11 rounded-sm border border-border-1 bg-white pl-11 pr-4 text-sm outline-none focus:border-light-green transition"
                        />

                        <FaSearch
                            size={13}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-3"
                        />

                    </div>

                </div>

            </div>

            {/* BODY */}
            <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/*left exam list */}
                {
                    loading ? (
                        <div className="xl:col-span-2 flex items-center justify-center bg-white">
                            <Spinner />
                        </div>
                    ) : (
                        <div className="xl:col-span-2">
                            {
                                filterExams.length === 0 ? (
                                    <div className="w-full bg-white py-14">
                                        <NoDataFound />
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {filterExams?.map((exam) => (
                                            <ExamCard key={exam._id} exam={exam} onPublish={handlePublish} onEdit={handleEdit} />
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    )
                }

                {/* right form */}
                <AddExamForm
                    subjects={subjects}
                    setExams={setExams}
                    editedData={editedData}
                    setEditedData={setEditedData}
                />
            </div>

        </section>
    );
};

export default AddExam;