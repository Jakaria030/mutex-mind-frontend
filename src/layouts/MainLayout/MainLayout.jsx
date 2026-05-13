import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen max-w-480 mx-auto bg-surface-1">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};


export default MainLayout;