import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../modules/auth';
import { HeroesRoutes } from '../modules/heroes';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='login' element={<LoginPage />} />

            {/* {uso de wildcard para que cualquier ruta que no sea login
                    cargue el router de heroes} */}
            <Route path='/*' element={<HeroesRoutes />} />
        </Routes>
    );
};
