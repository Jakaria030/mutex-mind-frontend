import { Route, Routes } from "react-router";

// Layouts
import MainLayout from "./layouts/MainLayout/MainLayout";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";

// Main Pages
import Home from "./pages/main/Home/Home";
import Subjects from "./pages/main/Subjects/Subjects";
import Leaderboard from "./pages/main/Leaderboard/Leaderboard";
import Contact from "./pages/main/Contact/Contact";
import Register from "./pages/main/Auth/Register";
import Login from "./pages/main/Auth/Login";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import AddSubject from "./pages/admin/AddSubject/AddSubject";
import AddExam from "./pages/admin/AddExam/AddExam";
import AddQuestions from "./pages/admin/AddQuestions/AddQuestions";
import Users from "./pages/admin/Users/Users";
import Settings from "./pages/admin/Settings/Settings";


const App = () => {
    return (
        <Routes>
            {/* ================= MAIN WEBSITE ================= */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/subjects" element={<Subjects />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Route>

            {/* ================= ADMIN PANEL ================= */}
            <Route
                path="/admin"
                element={<AdminLayout />}
            >
                <Route index element={<Dashboard />} />
                <Route path="add-subject" element={<AddSubject />} />
                <Route path="add-exam" element={<AddExam />} />
                <Route path="add-questions" element={<AddQuestions />} />
                <Route path="users" element={<Users />} />
                <Route path="settings" element={<Settings />} />
            </Route>
        </Routes>
    );
};

export default App;