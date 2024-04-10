import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../ui';
import { MarvelPage, DcPage } from '../modules/heroes';
import { LoginPage } from '../modules/auth';


export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='marvel' element={<MarvelPage />} />
                <Route path='dc' element={<DcPage />} />

                <Route path='login' element={<LoginPage />} />

                <Route path='/' element={<Navigate to='marvel' />} />
            </Routes>
        </>

    );
};
