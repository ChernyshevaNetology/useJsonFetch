import { useEffect, useState } from "react";
import axios from "axios";

interface IData {
  status: string;
}

const useJsonFetch = (url: string, options: any) => {
  const [error, setError] = useState<null | boolean>(null);
  const [errorMessage, setErrorMessage] = useState<unknown | null>(null);
  const [data, setData] = useState<IData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (): Promise<void> => {
    try {
      const { data } = await axios.get(url, options);
      if (data) {
        setLoading(false);
        setData(data);
      }
    } catch (err) {
      setError(true);
      setErrorMessage(err);
      console.log("error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, errorMessage };
};

export { useJsonFetch };
