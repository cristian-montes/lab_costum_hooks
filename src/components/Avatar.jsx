import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export const Avatar = ({id, allies ,name, affiliation,image, enemies}) => {
    return(
        <div>
            <Link to={`/details/${id}`}>
                <img src={image} alt={name} />
                <p>{name}</p>
            </Link>
        </div>
    )
}

Avatar.propTypes = { 
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}