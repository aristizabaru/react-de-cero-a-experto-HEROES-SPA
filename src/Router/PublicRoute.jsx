import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../modules/auth";

export const PublicRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);

    return (logged)
        ? <Navigate to={'/marvel'} />
        : children;
};
