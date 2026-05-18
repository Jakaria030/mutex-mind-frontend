import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { createExam, updateExam } from "../../../../services/examServices";
import ErrorMessage from "../../../../components/ErrorMessage";

const initialForm = {
    subject: "",
    name: "",
    difficulty: "easy",
    totalQuestions: 0,
    duration: 0,
};

const AddExamForm = ({ subjects = [], setExams, editedData, setEditedData }) => {
    const [form, setForm] = useState(initialForm);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    // Handle value change
    const numberFields = new Set(["totalQuestions", "duration"]);
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: numberFields.has(name) ? Number(value) : value,
        }));
    };

    // Handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");
        try {
            if (editedData) {
                const res = await updateExam(editedData._id, form);

                setExams((prev) =>
                    prev.map((exam) => exam._id === editedData._id ? { ...exam, ...res.data } : exam)
                );

                setEditedData(null);
            } else {
                const res = await createExam(form);
                setExams((prev) => [...prev, res?.data]);
            }

            setForm(initialForm);
        } catch (err) {
            setError(
                err.response?.data?.message || "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    // Edit data initialize
    useEffect(() => {

        if (!editedData) return;

        setForm({
            subject: editedData.subject._id || "",
            name: editedData.name || "",
            difficulty: editedData.difficulty || "easy",
            totalQuestions: editedData.totalQuestions || 0,
            duration: editedData.duration || 0,
        });

    }, [editedData]);


    return (
        <div>
            <div className="sticky top-20 bg-white border border-border-1 rounded-sm p-6">
                {/* Title */}
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 flex items-center justify-center bg-light-green/10 text-light-green rounded-sm">
                        <FaPlus />
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-text-1">
                            Create Exam
                        </h2>
                        <p className="text-xs text-text-2">
                            Add new exam with settings
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                    {/* Subject */}
                    <div>
                        <label className="text-sm text-text-1 font-medium">
                            Subject
                        </label>

                        <select
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="mt-2 w-full h-11 border border-border-1 rounded-sm px-3 text-sm outline-none focus:border-light-green"
                        >
                            <option value="">Select subject</option>
                            {subjects.map((subject) => (
                                <option key={subject._id} value={subject._id}>
                                    {subject.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Exam Name */}
                    <div>
                        <label className="text-sm font-medium text-text-1">
                            Exam Name
                        </label>

                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter exam name"
                            className="mt-2 w-full h-11 border border-border-1 rounded-sm px-3 text-sm outline-none focus:border-light-green"
                        />
                    </div>

                    {/* Difficulty */}
                    <div>
                        <label className="text-sm font-medium text-text-1">
                            Difficulty
                        </label>

                        <select
                            name="difficulty"
                            value={form.difficulty}
                            onChange={handleChange}
                            className="mt-2 w-full h-11 border border-border-1 rounded-sm px-3 text-sm outline-none focus:border-light-green"
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>

                    {/* Duration and total question */}
                    <div className="grid grid-cols-2 gap-4">

                        {/* Duration */}
                        <div>
                            <label className="text-sm font-medium text-text-1">
                                Duration (minutes)
                            </label>

                            <input
                                type="number"
                                name="duration"
                                value={form.duration}
                                onChange={handleChange}
                                placeholder="e.g 60"
                                className="mt-2 w-full h-11 border border-border-1 rounded-sm px-3 text-sm outline-none focus:border-light-green"
                            />
                        </div>

                        {/* Total Questions */}
                        <div>
                            <label className="text-sm font-medium text-text-1">
                                Total Questions
                            </label>

                            <input
                                type="number"
                                name="totalQuestions"
                                value={form.totalQuestions}
                                onChange={handleChange}
                                placeholder="e.g 50"
                                className="mt-2 w-full h-11 border border-border-1 rounded-sm px-3 text-sm outline-none focus:border-light-green"
                            />
                        </div>

                    </div>

                    {error && <ErrorMessage error={error} />}

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full h-11 cursor-pointer bg-light-green text-white text-sm font-medium rounded-sm hover:bg-dark-green transition"
                    >
                        {
                            loading ? editedData ? "Updating..." : "Creating..." : editedData ? "Update Exam" : "Create Exam"
                        }
                    </button>

                </form>
            </div>
        </div>
    );
};

export default AddExamForm;