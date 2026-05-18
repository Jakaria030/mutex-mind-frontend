import { useState } from "react";
import {
    FaPlus,
    FaTrash,
    FaCheckCircle,
    FaQuestionCircle,
    FaSave,
    FaLayerGroup,
} from "react-icons/fa";
import useExams from "../../../hooks/useExams";
import Message from "../../../components/Message";
import { createQuestions } from "../../../services/questionServices";

const createQuestion = () => ({
    question: "",
    options: [
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
    ],
});


const AddQuestions = () => {
    const { exams } = useExams();
    const [selectedSubject, setSelectedSubject] = useState("");
    const [selectedExam, setSelectedExam] = useState("");
    const [questions, setQuestions] = useState([
        createQuestion(),
    ]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    // Handle unique subjects from exams
    const subjects = [
        ...new Map(
            exams.map((exam) => [
                exam.subject._id,
                exam.subject,
            ])
        ).values(),
    ];

    // Hanlde filter exam by subject
    const filteredExams = selectedSubject
        ? exams.filter(
            (exam) => exam.subject._id === selectedSubject
        ) : [];

    const handleExamChange = (e) => {
        setSelectedExam(e.target.value);
        const exam = exams.find((exam) => exam._id === e.target.value);

        setQuestions([])
        for (let i = 0; i < exam.totalQuestions; i++) {
            handleAddQuestion();
        }
    };

    // Handle add new question block
    const handleAddQuestion = () => {
        setQuestions((prev) => [
            ...prev,
            createQuestion(),
        ]);
    };

    // Handle remove question
    const handleRemoveQuestion = (questionIndex) => {
        if (questions.length === 1) return;

        const updatedQuestions = questions.filter(
            (_, index) => index !== questionIndex
        );

        setQuestions(updatedQuestions);
    };

    // Handle question field change
    const handleQuestionChange = (questionIndex, field, value) => {
        const updatedQuestions = [...questions];

        updatedQuestions[questionIndex][field] = value;

        setQuestions(updatedQuestions);
    };

    // Handle option text change
    const handleOptionChange = (questionIndex, optionIndex, value) => {
        const updatedQuestions = [...questions];

        updatedQuestions[questionIndex]
            .options[optionIndex]
            .text = value;

        setQuestions(updatedQuestions);
    };

    // Handle correct option select
    const handleCorrectAnswer = (questionIndex, optionIndex) => {
        const updatedQuestions = [...questions];

        updatedQuestions[questionIndex].options =
            updatedQuestions[questionIndex].options.map(
                (option, index) => ({
                    ...option,
                    isCorrect: index === optionIndex,
                })
            );

        setQuestions(updatedQuestions);
    };

    // Handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            exam: selectedExam,
            questions,
        };

        setError("");
        setLoading(true);
        setSuccess("");

        try {
            const res = await createQuestions(payload);
            setSuccess(res.message);
            setQuestions([createQuestion()]);
            setSelectedExam("");
            setSelectedExam("");
        } catch (err) {
            setError(
                err.response?.data?.message || "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="h-[calc(100vh-120px)] overflow-y-auto">
            {/* Header */}
            <div className="bg-white border border-border-1 rounded-sm p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                    {/* Left */}
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-sm bg-light-green/10 text-light-green flex items-center justify-center">
                                <FaLayerGroup size={18} />
                            </div>

                            <div>
                                <h1 className="text-2xl font-bold text-text-1">
                                    Bulk Question Management (Max: {exams.find((exam) => exam._id === selectedExam)?.totalQuestions || 0})
                                </h1>

                                <p className="mt-1 text-sm text-text-2">
                                    Add multiple MCQ questions at once for faster exam creation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-4 py-3 rounded-sm border border-border-1 bg-bg-white">
                            <p className="text-xs text-text-2">
                                Total Questions:
                            </p>

                            <h3 className="text-md text-text-1">
                                {questions.length}
                            </h3>
                        </div>

                        <button
                            type="button"
                            onClick={handleAddQuestion}
                            className="px-4 py-3  rounded-sm bg-light-green text-white text-sm border border-light-green font-medium flex items-center gap-2 hover:bg-dark-green transition cursor-pointer"
                        >
                            <FaPlus size={12} />
                            Add Question
                        </button>
                    </div>
                </div>
            </div>

            {/* Body */}
            <form
                onSubmit={handleSubmit}
                className="mt-6"
            >
                {/* Subject + Exam Select */}
                <div className="bg-white border border-border-1 rounded-sm p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {/* Subject */}
                        <div>
                            <label className="text-md font-medium text-text-1">
                                Select Subject
                            </label>

                            <select
                                value={selectedSubject}
                                onChange={(e) => {
                                    setSelectedSubject(e.target.value);
                                    setSelectedExam("");
                                    setQuestions([createQuestion()]);
                                }}
                                className="mt-2 w-full py-3 border border-border-1 rounded-sm px-4 text-sm outline-none focus:border-light-green"
                            >
                                <option value="">
                                    Select subject
                                </option>

                                {subjects.map((subject) => (
                                    <option
                                        key={subject._id}
                                        value={subject._id}
                                    >
                                        {subject.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Exam */}
                        <div>

                            <label className="text-md font-medium text-text-1">
                                Select Exam
                            </label>

                            <select
                                value={selectedExam}
                                onChange={handleExamChange}
                                disabled={!selectedSubject}
                                className="mt-2 w-full py-3 border border-border-1 rounded-sm px-4 text-sm outline-none focus:border-light-green disabled:bg-gray-100 disabled:cursor-not-allowed"
                            >
                                <option value="">
                                    Select exam
                                </option>

                                {filteredExams.map((exam) => (
                                    <option
                                        key={exam._id}
                                        value={exam._id}
                                    >
                                        {exam.name}
                                    </option>
                                ))}

                            </select>

                        </div>

                    </div>

                </div>

                {/* Questions */}
                <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-5">
                    {questions.map((questionItem, questionIndex) => (
                        <div
                            key={questionIndex}
                            className="bg-white border border-border-1 rounded-sm overflow-hidden"
                        >
                            {/* Top */}
                            <div className="px-5 py-4 border-b border-border-1 bg-bg-white flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-sm bg-light-green/10 text-light-green flex items-center justify-center">
                                        <FaQuestionCircle size={14} />
                                    </div>

                                    <div>
                                        <h2 className="text-sm font-bold text-text-1">
                                            Question #{questionIndex + 1}
                                        </h2>

                                        <p className="mt-1 text-[11px] text-text-2">
                                            MCQ Question
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        handleRemoveQuestion(questionIndex)
                                    }
                                    className="w-9 h-9 rounded-sm border border-red-200 text-red-500 hover:bg-red-50 flex items-center justify-center cursor-pointer transition"
                                >
                                    <FaTrash size={12} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                {/* Questions */}
                                <div>
                                    <label className="text-sm font-medium text-text-1">
                                        Question
                                    </label>

                                    <textarea
                                        value={questionItem.question}
                                        onChange={(e) => handleQuestionChange(questionIndex, "question", e.target.value)}
                                        placeholder="Write question here..."
                                        className="mt-2 w-full min-h-22.5 border border-border-1 rounded-sm px-4 py-3 text-sm outline-none focus:border-light-green resize-none"
                                    />

                                </div>

                                {/* Options */}
                                <div className="mt-5">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium text-text-1">
                                            Options
                                        </label>

                                        <p className="text-[11px] text-text-2">
                                            Select correct answer
                                        </p>
                                    </div>

                                    <div className="mt-3 space-y-3">
                                        {questionItem.options.map(
                                            (option, optionIndex) => (
                                                <div
                                                    key={optionIndex}
                                                    className={`border rounded-sm p-2.5 transition ${option.isCorrect
                                                        ? "border-green-400 bg-green-50"
                                                        : "border-border-1"
                                                        }`}
                                                >

                                                    <div className="flex items-center gap-2.5">

                                                        {/* Correct */}
                                                        <button
                                                            type="button"
                                                            onClick={() => handleCorrectAnswer(questionIndex, optionIndex)}
                                                            className={`w-9 h-9 rounded-sm border flex items-center justify-center cursor-pointer transition shrink-0 ${option.isCorrect
                                                                ? "bg-green-500 border-green-500 text-white"
                                                                : "border-border-1 text-text-2 hover:border-light-green"
                                                                }`}
                                                        >
                                                            <FaCheckCircle size={13} />
                                                        </button>

                                                        {/* Input */}
                                                        <div className="flex-1">
                                                            <input
                                                                type="text"
                                                                value={option.text}
                                                                onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                                                                placeholder={`Option ${String.fromCharCode(65 + optionIndex)}`}
                                                                className="w-full h-9 border border-border-1 rounded-sm px-3 text-sm outline-none focus:border-light-green"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Action */}
                <div className="sticky bottom-0 mt-6 bg-white border border-border-1 rounded-sm p-4 flex items-center justify-between">
                    <div>
                        <h3 className="text-sm font-semibold text-text-1">
                            Ready to save questions?
                        </h3>

                        <p className="mt-1 text-xs text-text-2">
                            Total {questions.length} questions prepared.
                        </p>
                    </div>

                    {error && <Message type="error" message={error} />}
                    {success && <Message type="success" message={success} />}

                    <button
                        type="submit"
                        disabled={!selectedExam}
                        className="h-12 px-6 rounded-sm bg-light-green text-white text-sm font-medium flex items-center gap-2 hover:bg-dark-green disabled:bg-dark-green disabled:cursor-not-allowed transition cursor-pointer"
                    >
                        <FaSave size={13} />
                        Save All Questions
                    </button>

                </div>
            </form>
        </section>
    );
};

export default AddQuestions;