import React from 'react';

const AvatarList = ({allAvatars, isLoading}) => {
    return(
        <ul>
            { allAvatars.map(({id, name, image}) => (
                <li key={id}>
                    

                </li>
            ))

            }
        </ul>
        
       
    )
}

export default AvatarList;