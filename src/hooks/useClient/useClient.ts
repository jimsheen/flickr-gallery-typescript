import {
  useState,
  useEffect,
} from 'react';

import axios from 'axios';

// import useAPIError from './useAPIError';

const useClient = (endpoint: any) => {

  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);
  // const { addError } = useAPIError();


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // const response = await endpoint;
        const response = await axios(endpoint);
        setResponse(response.data);
        setLoading(false);
        return response
      } catch (error) {
        // addError(errorMessage ? errorMessage : error.message);
        // setLoading(false);
      }
      // if (!response) addError(errorMessage)
    }
    fetchData();
  }, [])

  return { response, isLoading };
}

export default useClient