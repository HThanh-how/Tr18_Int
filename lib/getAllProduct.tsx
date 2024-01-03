
"use client"
import axios from 'axios';
import { useEffect, useState } from "react";

import { Shoe, Response } from "../pages/api/InterfaceProduct";

// async function getApiData() {
//   try {
//     const response = await axios.get<Response>('http://localhost:3000/api');
    
//     // Access the array of shoes
//     const shoes = response.data.shoes;
//     console.log(shoes);
    
//     // Perform further operations with the returned data...
    
//   } catch (error) {
//     console.error('Error occurred while fetching API:', error);
//   }
// }

// getApiData();




const getApiData = () => {
    const url = "http://localhost:3000/api";
    const [data, setData] = useState<Shoe[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
  
        try {
          const result = await axios(url);
          console.log(result);
          
          setData(result.data.shoes);
        } catch (error) {
          setIsError(true);
        }
        setIsLoading(false);
      };
  
      fetchData();
    }, [url]);
    if (data)
    console.log(data);

    
  
    return [{ data, isLoading, isError }];
  };
  
  export default getApiData;