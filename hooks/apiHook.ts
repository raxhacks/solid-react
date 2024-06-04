import { useState, useEffect } from 'react';

type Response<T> = {
  data: T | undefined;
  error: string | undefined;
  isLoading: boolean;
};

export const useApi = <T>(fetcher: () => Promise<T>): Response<T> => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetcher();
        setData(result);
        setError(undefined);
      } catch (error: any) {
        setError("error.message");
        setData(undefined);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetcher]);

  return { data, error, isLoading };
};