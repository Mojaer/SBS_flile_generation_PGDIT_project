import { useQuery } from "react-query";


const useAllData = () => {
    const { data: allData = [], isLoading, refetch } = useQuery('data', async () => {
        const res = await fetch('http://localhost:5000/allData')
        const data = await res.json()
        return data

    })
    return [allData]
};

export default useAllData;