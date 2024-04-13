import { useContext, useEffect, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../modules/auth";

// Cuando dentro de las props recibe el children significa que es un high order component
export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);
    const { pathname, search } = useLocation();

    /*
        useMemo memoriza el resultado y solo se vuelve a calcular
        si una de las dependencias cambia. Evita que se ejecute cada
        que se renderize el componente.
    */
    const lastPath = useMemo(() => pathname + search, [pathname, search]);
    /*
       useEffect permite que la función solo sea llamada cuando la dependencia
       cambie.Evita que se ejecute cada que se renderize el componente.
   */
    useEffect(() => {
        localStorage.setItem('lastPath', lastPath);
    }, [lastPath]);


    return (logged)
        ? children
        : <Navigate to={'/login'} />;
};
