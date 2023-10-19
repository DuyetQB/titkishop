import { useEffect, useState } from 'react';
import { FetchResult } from '../types/base';

export function useFetch<TResult>(
  fetchFn: () => Promise<TResult>,
  deps: unknown[] = [],
): FetchResult<TResult> {
  const [result, setResult] = useState<FetchResult<TResult>>({
    loading: true,
  });

  useEffect(() => {
    (async function () {
      try {
        setResult({ ...result, loading: true });
        const data = await fetchFn();
        
        setResult({ data, error: undefined, loading: false });
      } catch (error) {
        setResult({ ...result, error, loading: false });
        console.log("error",error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return result;
}
