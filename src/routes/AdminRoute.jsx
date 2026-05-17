import { Navigate } from "react-router";
import Spinner from "../components/Spinner";
import { useAuth } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="h-[calc(100vh-420px)] flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    if (!user || user.role !== "admin") {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default AdminRoute;