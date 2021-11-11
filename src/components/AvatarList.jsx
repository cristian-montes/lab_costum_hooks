import React from 'react';
import { Avatar } from './Avatar';
import PropTypes from 'prop-types'

const AvatarList = ({allAvatars, isLoading}) => {
    return(
        <ul>
            { allAvatars.map(({id, allies ,name, affiliation,image, enemies}) => (
                <li key={id} style={{listStyleType:"none"}}>

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

AvatarList.propTypes = { 
    allAvatars: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default AvatarList;