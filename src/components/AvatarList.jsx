import React from 'react';
import { Avatar } from './Avatar';

const AvatarList = ({allAvatars, isLoading}) => {
    return(
        <ul>
            { allAvatars.map(({id, allies ,name, affiliation,image, enemies}) => (
                <li key={id}>

                    <Avatar
                        id={id}
                        allies={allies}
                        name={name}
                        affiliation={affiliation}
                        image={image}
                        enemies={enemies}
                    />
                </li>
            ))

            }
        </ul>
        
       
    )
}

export default AvatarList;