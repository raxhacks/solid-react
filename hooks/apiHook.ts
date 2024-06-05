import { useState, useEffect } from 'react';

type Response<T> = {
  data: T | undefined;
  error: string | undefined;
  isLoading: boolean;
};

type Fetcher<T> = (body?: any) => Promise<T>;

export const useApi = <T>(fetcher: Fetcher<T>, body?: any): Response<T> => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetcher(body);
        setData(result);
        setError(undefined);
      } catch (error: any) {
        console.error(error);
        setError(error.message);
        setData(undefined);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetcher]);

  return { data, error, isLoading };
};