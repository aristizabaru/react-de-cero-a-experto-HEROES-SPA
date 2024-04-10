import { Routes, Route, Navigate } from 'react-router-dom';
import { MarvelPage } from '../modules/heroes/pages/MarvelPage';
import { DcPage } from '../modules/heroes/pages/DcPage';
import { LoginPage } from '../modules/auth/pages/LoginPage';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='marvel' element={<MarvelPage />} />
            <Route path='dc' element={<DcPage />} />

            <Route path='login' element={<LoginPage />} />

            <Route path='/' element={<Navigate to='marvel' />} />
        </Routes>
    );
};
