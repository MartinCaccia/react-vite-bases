import { useEffect, useState } from "react"
import { fetchData } from "../helpers/fetchData";

export const useFetchData = (urn: string) => {

    const [state, setState] = useState({
      data: null,
      error: null,
      isLoading: true
    })

    const getData = async() =>{
        const {data, error, isLoading} = await fetchData(urn)
        setState({
          data,
          error,
          isLoading
        })
    }

    useEffect(() => { 
        getData() 
    }, [urn])  

  return { ...state }
}
