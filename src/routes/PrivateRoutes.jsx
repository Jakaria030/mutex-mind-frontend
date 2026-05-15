import { Navigate, useLocation } from "react-router";
import Spinner from "../components/Spinner";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="h-[calc(100vh-420px)] flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;