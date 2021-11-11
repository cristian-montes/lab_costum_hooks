import React from 'react';
import { Link } from 'react-router-dom';

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