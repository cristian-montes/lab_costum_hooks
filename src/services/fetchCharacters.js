
export const fetchAvatars = async () => {
    const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=Water+Tribe');
    
    const avatars =  await res.json();

   const avataros =  avatars.map(avatar => ({
        id: avatar._id,
        allies: avatar.allies,
        name: avatar.name,
        affiliation: avatar.affiliation,
        image: avatar.photoUrl,
        enemies: avatar.enemies
    }));

    return avataros;
}
