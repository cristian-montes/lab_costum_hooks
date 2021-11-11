import React from "react";
import AvatarList from "../components/AvatarList";
import { useAllAvatars } from "../hooks/useAllAvatars";



const RickAndMortyContainer = () => {
    const { allAvatars, isLoading} = useAllAvatars();
    

    return (
        <AvatarList allAvatars={allAvatars} isLoading={isLoading}/>
    )
}


export default RickAndMortyContainer;