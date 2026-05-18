import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { generateSlug } from "../../../../utils";
import { createSubject, updateSubject } from "../../../../services/subjectServices";
import useSubjects from "../../../../hooks/useSubjects";
import Message from "../../../../components/Message";

const initialForm = {
    name: "",
    slug: "",
    category: "",
    categoryColor: "#000000",
    iconName: "",
};

const AddSubjectForm = ({ subjects, setSubjects, editedData, setEditedData }) => {
    const [form, setForm] = useState(initialForm);
    const [slugError, setSlugError] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    // Handle form value change
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // Handle submit form
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");
        try {
            if (editedData) {
                const res = await updateSubject(editedData._id, form);

                setSubjects((prev) =>
                    prev.map((subject) => subject._id === editedData._id ? { ...subject, ...res.data.subject } : subject)
                );

                setEditedData(null);
            } else {
                const res = await createSubject(form);
                setSubjects((prev) => [
                    ...prev,
                    res.data.subject,
                ]);
            }
            setForm(initialForm);
        } catch (err) {
            setError(
                err.response?.data?.message || "Something went wrong"
            )
        } finally {
            setLoading(false);
        }
    };

    // Slug auto type when name input
    useEffect(() => {
        setForm((prev) => ({
            ...prev,
            slug: generateSlug(prev.name),
        }));
    }, [form.name]);

    // Slug check
    useEffect(() => {

        const slugExists = subjects.some(
            (subject) => subject._id !== editedData?._id && subject.slug.toLowerCase() === form.slug.toLowerCase()
        );

        if (slugExists) {
            setSlugError("Slug already exists");
        } else {
            setSlugError("");
        }

    }, [form.slug, subjects]);

    // Edit data initialize
    useEffect(() => {

        if (!editedData) return;

        setForm({
            name: editedData.name || "",
            slug: editedData.slug || "",
            category: editedData.category || "",
            categoryColor: editedData.categoryColor || "#000000",
            iconName: editedData.iconName || "",
        });

    }, [editedData]);

    return (
        <div>
            <div className="sticky top-20 bg-white border border-border-1 rounded-sm p-6">
                {/* Title */}
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-sm bg-light-green/10 text-light-green flex items-center justify-center">
                        <FaPlus size={15} />
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-text-1">
                            Add Subject
                        </h2>

                        <p className="mt-1 text-xs text-text-2">
                            Create new exam subject
                        </p>
                    </div>

                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-6"
                >

                    {/* Subject Name */}
                    <div>
                        <label className="block text-sm font-medium text-text-1">
                            Subject Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter subject name"
                            className="mt-2 w-full h-11 rounded-sm border border-border-1 px-4 text-sm outline-none focus:border-light-green"
                        />
                    </div>

                    {/* Slug */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-text-1">
                            Subject Slug
                        </label>

                        <input
                            type="text"
                            name="slug"
                            value={form.slug}
                            onChange={handleChange}
                            placeholder="e.g operating-system"
                            className="mt-2 w-full h-11 rounded-sm border border-border-1 px-4 text-sm outline-none focus:border-light-green"
                        />
                    </div>

                    {slugError && <Message type="error" message={slugError} />}

                    {/* Category */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-text-1">
                            Category
                        </label>

                        <input
                            type="text"
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            placeholder="Enter category"
                            className="mt-2 w-full h-11 rounded-sm border border-border-1 px-4 text-sm outline-none focus:border-light-green"
                        />
                    </div>

                    {/* Category color */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-text-1">
                            Category Color
                        </label>

                        <div className="mt-2 flex items-center gap-3">
                            {/* Color Picker */}
                            <input
                                type="color"
                                name="categoryColor"
                                value={form.categoryColor}
                                onChange={handleChange}
                                className="w-12 h-11 p-1 border border-border-1 rounded-sm cursor-pointer bg-white"
                            />

                            {/* HEX Input */}
                            <input
                                type="text"
                                name="categoryColor"
                                value={form.categoryColor}
                                onChange={handleChange}
                                placeholder="#000000"
                                className="flex-1 h-11 rounded-sm border border-border-1 px-4 text-sm outline-none focus:border-light-green"
                            />
                        </div>

                    </div>

                    {/* Icon */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-text-1">
                            React Icon Name
                        </label>

                        <input
                            type="text"
                            name="iconName"
                            value={form.iconName}
                            onChange={handleChange}
                            placeholder="e.g FaLaptopCode"
                            className="mt-2 w-full h-11 rounded-sm border border-border-1 px-4 text-sm outline-none focus:border-light-green"
                        />

                        <p className="mt-2 text-xs text-text-3">
                            Example: FaCode, FaDatabase, FaLaptopCode
                        </p>
                        {error && <Message type="error" message={error} />}
                    </div>


                    {/* Submit */}
                    <button
                        type="submit"
                        className="mt-4 w-full py-3 cursor-pointer rounded-sm bg-light-green text-white text-sm font-medium hover:bg-dark-green transition"
                    >
                        {
                            loading ? editedData ? "Updating..." : "Submitting..." : editedData ? "Update Subject" : "Add Subject"
                        }
                    </button>

                </form>
            </div>
        </div>
    );
};

export default AddSubjectForm;