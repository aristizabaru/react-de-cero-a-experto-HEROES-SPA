// Recibe los componentes hijos en las props. Esto lo hace un high order component

import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

import { types } from "../types/types";

const initialState = {
    logged: false,
};

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, initialState);

    const login = (name = '') => {

        const action = {
            type: types.login,
            payload: name,
        };

        dispatch(action);
    };

    return (
        // La prop value expone los datos que se compartirán en el contexto
        <AuthContext.Provider value={{
            authState,
            login: login
        }}>
            {children}
        </AuthContext.Provider>
    );
};
