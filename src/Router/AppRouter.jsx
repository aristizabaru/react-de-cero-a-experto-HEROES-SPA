import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../modules/auth';
import { HeroesRoutes } from '../modules/heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='login' element={
                <PublicRoute>
                    <LoginPage />
                </PublicRoute>
            } />

            {
                /* {uso de wildcard para que cualquier ruta que no sea login
                    cargue el router de heroes} */
            }
            <Route path='/*' element={
                /* Los high order components siempre envuelven otros componentes
                   que son pasados como hijos a este */
                <PrivateRoute>
                    <HeroesRoutes />
                </PrivateRoute>
            } />

            {/* <Route path='login' element={<LoginPage />}/> */}
        </Routes>
    );
};
