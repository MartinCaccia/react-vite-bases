export const fetchData = async(endpoint: string) => {
    try {
        const response = await fetch(`https://dummyjson.com/${endpoint}`)
        const data = await response.json()
        return {data, error: null, isLoading: false}
    } catch (error) {
        return {data: null, error, isLoading: false}
    } 
    // finally {
    //     setIsLoading(false);
    // }
}