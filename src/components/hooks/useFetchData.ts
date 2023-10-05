import { useEffect, useState } from "react"
import { fetchData } from "../helpers/fetchData";

export const useFetchData = (endpoint: string) => {

    const [data, setData] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<any | null>(null);

    const getData = async() =>{
        setIsLoading(true);
        const {data, error, isLoading} = await fetchData(endpoint)
        setData(data)
        setError(error)
        setIsLoading(isLoading)
    }

    useEffect(() => { 
        getData() 
    }, [endpoint])  

  return {
    data,
    error,
    isLoading
  }
}
