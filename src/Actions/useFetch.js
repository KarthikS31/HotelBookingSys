import { useState } from "react";

function useFetch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function request(url, method = "GET", body = null) {
    setLoading(true);
    setError(null);

    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    return fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        if (response.status === 204) {
          return null;
        }

        return response.json();
      })
      .catch((err) => {
        setError(err.message);
        throw err;
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return { request, loading, error };
}

export default useFetch;