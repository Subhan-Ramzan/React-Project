import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ShowApiData() {
  const [data, setData] = useState(null); // State to store API data
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    // Replace with the API URL and the required postId
    const postId = 9442;
    const apiUrl = `https://aep.tdd.mybluehost.me/staging/3938/wp-json/wp/v2/product-template-one/${postId}`;
    
    // Make API call using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data.acf); // Store "acf" data from the response
        setLoading(false); // Turn off loading
      })
      .catch((error) => {
        setError(error.message); // Capture error message
        setLoading(false); // Turn off loading
      });
  }, []);

  // Render logic
  if (loading) return <p>Loading...</p>; // Show loading state
  if (error) return <p>Error: {error}</p>; // Show error if occurred

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">API Data:</h1>
      {data ? (
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(data, null, 2)} {/* Pretty-print JSON */}
        </pre>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}
