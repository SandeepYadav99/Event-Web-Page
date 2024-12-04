import { useState, useCallback } from "react";

const useFetchApi = (baseUrl) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const request = useCallback(
    async (endpoint, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      setError(null);

      try {
        const config = {
          method,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
        };

        if (body) {
          config.body = JSON.stringify(body);
        }

        const response = await fetch(`${baseUrl}${endpoint}`, config);
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message || "Something went wrong");
        }

        setData(responseData);
        return responseData;
      } catch (err) {
        setError(err.message || "Request failed");
        throw err; // Re-throw error if you want to handle it further.
      } finally {
        setLoading(false);
      }
    },
    [baseUrl]
  );

  return {
    request, // Function to make requests
    loading,
    error,
    data, // Last fetched data
  };
};

export default useFetchApi;
