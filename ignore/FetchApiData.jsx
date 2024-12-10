import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API URL
    const apiURL = "https://aep.tdd.mybluehost.me/staging/3938/wp-json/wp/v2/product-template-one/9442";

    // Fetch data using Axios
    axios
      .get(apiURL)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>{product.acf?.main_heading || "No Title"}</h1>
      <h2>{product.acf?.sub_heading || "No Subtitle"}</h2>
      <p>{product.acf?.text || "No Description"}</p>

      <h3>Certificates</h3>
      <ul>
        {product.acf?.certificates?.map((url, index) => (
          <li key={index}>
            <img src={url} alt={`Certificate ${index + 1}`} style={{ width: "100px" }} />
          </li>
        ))}
      </ul>

      <h3>Product Images</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {product.acf?.product_images?.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index + 1}`} style={{ width: "150px" }} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
