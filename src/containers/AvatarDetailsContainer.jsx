import React from "react";
import { useOneAvatar } from "../hooks/useOneAvatar";

const AvatarDetailsContainer = () => {
    const {oneAvatar, isLoading} = useOneAvatar();

  console.log(oneAvatar)

    return(
       <div>
           {
               isLoading
                    ?
                <h1>Loading... give me a minute</h1>
                    :
                <div>
                    <img src={oneAvatar.photoUrl} alt={oneAvatar.name} />
                    <p>{oneAvatar.name}</p>
                    <p>allies: {oneAvatar.allies}</p>
                    <p>affiliation: {oneAvatar.affiliation}</p>
                    <p>enemies: {oneAvatar.enemies}</p>
                    <p>profession: {oneAvatar.profession}</p>
                    <p>skin: {oneAvatar.skin}</p>
                    <p>weapon: {oneAvatar.weapon}</p>
                </div>
           }
       </div>
    )

}

export default AvatarDetailsContainer;