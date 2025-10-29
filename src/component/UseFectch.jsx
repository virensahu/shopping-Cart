import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("network error")
                }
                const data = await response.json();
                setData(data)
            }
            catch(error) {
                setError(error.message);
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [url])

    return {data, error, loading};
}

export default useFetch;