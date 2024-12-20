import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();

    if (loading) {
        return <p>Loading ...</p>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
};

export default PrivateRoute;
