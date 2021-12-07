import { useState, useEffect } from 'react';

function useFetch(url, city) {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => setError(error));
  }, [city]);

  return [data, error];
}
export default useFetch;
