import { Outlet } from "react-router";
import AdminSidebar from "./components/AdminSidebar";
import AdminTopbar from "./components/AdminTopbar";

const AdminLayout = () => {
    return (
        <div className="min-h-screen bg-surface-1">

            {/* Topbar */}
            <AdminTopbar />

            {/* Body */}
            <div className="flex">

                {/* Sidebar */}
                <AdminSidebar />

                {/* Main Content */}
                <main className="flex-1 p-6 overflow-y-auto ml-64">
                    <Outlet />
                </main>

            </div>

        </div>
    );
};

export default AdminLayout;