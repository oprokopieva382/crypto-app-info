import "./App.css";
import React, { useState, useEffect } from "react";

import axios from "axios";
import { CryptoList } from "./components/CryptoList";
import { Pagination } from "./components/Pagination";

export const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  let currentPost = coinData.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoinData(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>Crypto Gallery</h1>
      <CryptoList coinData={currentPost} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={coinData.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
