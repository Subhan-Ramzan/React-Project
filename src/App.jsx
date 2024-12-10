import './App.css';
import Header from './components/Header';
import Technical from './components/Technical';
import Maintenance from './components/Maintenance';
import Gallery from './components/Gallery';
import Applications from './components/Applications';
import Footer from './components/Footer';
// import ProductDetails from './components/FetchApiData';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const port = 9445
  useEffect(() => {
    // API URL
    const apiURL = `https://aep.tdd.mybluehost.me/staging/3938/wp-json/wp/v2/product-template-one/${port}`;

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
    <div className="lg:px-24 px-2 py-6 md:py-10 scroll-smooth">

      <Routes>
        {/* Define the route for the home page */}
        <Route
          path="/"
          element={
            <>
              <Header product={product} />
              <Gallery product={product} />
              <Technical product={product} />
              <Maintenance product={product} />
              <Applications product={product} />
              <Footer />
            </>
          }
        />

        {/* Define the route for the product page */}
        {/* <Route path="/product" element={<ProductDetails />} /> */}
      </Routes>
    </div>
  );
}

export default App;
