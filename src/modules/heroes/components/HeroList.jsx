import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {

    // Memoriza el resultado entre re-renders si la dependencia no cambia
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div
            className='row row-cols-1 row-cols-md-3 g-3'
        >
            {heroes.map(hero => (
                <HeroCard
                    key={hero.id}
                    // con el spread operator se pasan todas las props al componente
                    {...hero}
                />
            ))}
        </div>
    );
};

HeroList.propTypes = {
    publisher: PropTypes.string
};