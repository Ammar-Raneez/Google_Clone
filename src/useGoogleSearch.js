import React, { useState, useEffect } from 'react'
import API_KEY from './keys';
import { useStateValue } from './components/StateProvider';

const CONTEXT_KEY = '8dcf9afc94e0ba2c1';

function useGoogleSearch() {
    const [{ term }] = useStateValue();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch (
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then (res => res.json())
            .then (result => setData(result))
        }
        fetchData()
    }, [term])
    
    return { data };
}

export default useGoogleSearch