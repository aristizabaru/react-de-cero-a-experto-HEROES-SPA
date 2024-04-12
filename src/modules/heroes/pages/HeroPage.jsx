import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroesById } from '../helpers';

export const HeroPage = () => {

    // Custom hook de react router para tomar los parámetros de la URL
    const { id, ...url } = useParams();
    const navigate = useNavigate();
    const hero = useMemo(() => getHeroesById(id), [id]);

    const onNavigateBack = () => {
        // retorna a la última página visitada usando el historial de navegación
        // navigate(-1);
        const publisher = url['*'].split('/')[1].split('-')[0];
        navigate(`/${publisher}`);
    };

    // Redirecciona a /marvel si la ruta no es valida, si el id no se encuentra
    if (!hero) {
        return <Navigate to='/marvel' />;
    }
    return (
        <div className="row mt-5">
            {/* El div usa la biblioteca de animaciones de https://animate.style/ */}
            <div className="col-4 animate__animated animate__fadeInLeft">
                <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} className='img-thumbnail' />
            </div>
            <div className="col-8">
                <h1>{hero.superhero}</h1>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter ego: </b>{hero.alter_ego}</li>
                    <li className='list-group-item'><b>Publisher: </b>{hero.publisher}</li>
                    <li className='list-group-item'><b>First Appearance: </b>{hero.first_appearance}</li>
                </ul>
                <h5 className='mt-3'>Characters</h5>
                <p>{hero.characters}</p>
                <button
                    className='btn btn-outline-secondary mt-4'
                    onClick={onNavigateBack}
                >
                    Regresar
                </button>
            </div>
        </div>
    );
};
