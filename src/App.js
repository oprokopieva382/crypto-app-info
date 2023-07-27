import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoList from "./components/CryptoList";
import { Pagination } from "./components/Pagination";

export const App = () => {
  const [coinsData, setCoinsData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);


  const lastIndex = currentPage * postsPerPage;  
  const firstIndex = lastIndex - postsPerPage;

  const currentPosts = coinsData.slice(firstIndex, lastIndex)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoinsData(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>Crypto Gallery</h1>
      <CryptoList coinsData={currentPosts} />
      <Pagination
        setCurrentPage={setCurrentPage}
        totalPosts={coinsData.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
      />
    </div>
  );
};
