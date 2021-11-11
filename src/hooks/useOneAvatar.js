import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getOneAvatar } from "../services/fetchCharacters";


export const useOneAvatar = () => {
    const { id } = useParams();
    const [oneAvatar, setOneAvatar] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        const avataroData = async () => {
            const data = await getOneAvatar(id);

            setOneAvatar(data);
            setIsLoading(false);
        }
        avataroData();
    }, [id])

    return { oneAvatar, isLoading};

}