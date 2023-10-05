export const fetchData = async(urn: string) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/${urn}`)
        const data: any | null = await response.json()
        return {data, error: null, isLoading: false}
    } catch (error: any | null) {
        return {data: null, error, isLoading: false}
    } 
    // finally {
    //     setIsLoading(false);
    // }
}