import { Route, Routes } from "react-router";

// Layouts
import MainLayout from "./layouts/MainLayout/MainLayout";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";

// Main Pages
import Home from "./pages/main/Home/Home";
import Subjects from "./pages/main/Subjects/Subjects";
import Leaderboard from "./pages/main/Leaderboard/Leaderboard";
import Contact from "./pages/main/Contact/Contact";
import Login from "./pages/main/Login/Login";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard/Dashboard";



const App = () => {
    return (
        <Routes>
            {/* ================= MAIN WEBSITE ================= */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/subjects" element={<Subjects />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
            </Route>

            {/* ================= ADMIN PANEL ================= */}
            <Route
                path="/admin"
                element={<AdminLayout />}
            >
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    );
};

export default App;