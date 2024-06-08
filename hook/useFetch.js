import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = ({endpoint, query}) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            'x-rapidapi-key': '1cd42d433cmshd1c45e57f239189p1e1f0fjsn46f42574eb44',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
          }
      };

      const fetchData = async () => {
        setIsloading(true)
        try {
            console.log("start fetching data.......")
            const response = await axios.request(options);
            console.log("...data not found")
            setData(response?.data);
            setIsloading(false);     
        } catch (error) {
            setError(error)
            alert("There is something Wrong")
        } finally{
            setIsloading(false)
        }
      }

      useEffect(()=>{
        fetchData();
      }, [])

      const reFetch = () => {
        setIsloading(true);
        fetchData();
      }

      return {data, isLoading, error, reFetch}
}

export default useFetch