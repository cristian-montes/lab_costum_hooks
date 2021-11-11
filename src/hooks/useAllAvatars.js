import { useState, useEffect } from 'react';
import { fetchAvatars } from '../services/fetchCharacters';

export const useAllAvatars = () => {
    const [allAvatars, setAllAvatars] = useState([]);
    const [isLoading, setIsLoading] = useState (true);

    useEffect(()=>{
        
        const avatarsData = async () => {
            const res = await fetchAvatars();

            setAllAvatars(res);
            setIsLoading(false);
            

        }
        
        avatarsData();

    }, []);
    console.log('avatars', allAvatars);

    return { allAvatars, isLoading};
}