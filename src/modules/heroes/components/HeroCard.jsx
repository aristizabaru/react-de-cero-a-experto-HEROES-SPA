import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,

}) => {

    const heroImageUrl = useMemo(() => `/assets/heroes/${id}.jpg`, [id]);

    return (
        <div className='col'>
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImageUrl} className='card-img' alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className='card-title'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>
                            {
                                (alter_ego !== characters) && (<p className='card-text'>{characters}</p>)
                            }
                            <p className='card-text'>
                                <small className='text-muted'>{first_appearance}</small>
                            </p>
                            <Link
                                to={`/hero/${id}`}
                                className='ink-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'
                            >Mas...</Link >
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};


HeroCard.propTypes = {
    id: PropTypes.string,
    superhero: PropTypes.string,
    alter_ego: PropTypes.string,
    first_appearance: PropTypes.string,
    characters: PropTypes.string
};