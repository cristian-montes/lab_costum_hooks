import React from 'react';

export const Avatar = ({id, allies ,name, affiliation,image, enemies}) => {
    return(
        <div>
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
    )
}