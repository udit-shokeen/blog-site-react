import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const AbortConst = new AbortController();
    
        fetch(url, {signal: AbortConst.signal})
        .then(res => {
            if(!res.ok){
                throw Error('cannot fetch data for this resource');
            }
            return res.json();
        })
        .then(data => {
            setError(null);
            setIsLoading(false);
            setData(data);
        })
        .catch(err => {
            if(err.name !== 'AbortError'){
                setIsLoading(false);
                setError(err.message);
            }
        })

        return () => AbortConst.abort();
    }, [url]);

    return {data, isLoading, error};
}

export default useFetch;