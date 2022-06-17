import { useEffect, useState } from "react";
import axios from 'axios'

export function useFetch(url) {

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        (
            async function(){
                try{
                    setIsLoaded(true)
                    const response = await axios.get(url)
                    setItems(response.data)
                }catch(err){
                    setError(err)
                }finally{
                    setIsLoaded(false)
                }
            }
        )()
    }, [url])
    return { items, error, isLoaded }

}