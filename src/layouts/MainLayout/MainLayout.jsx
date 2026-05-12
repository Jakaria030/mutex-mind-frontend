import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

const MainLayout = () => {
    return (
        <div className="min-h-screen max-w-480 mx-auto bg-surface-1">
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};


export default MainLayout;