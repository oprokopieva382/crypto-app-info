import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { CryptoList } from "./components/CryptoList";
import { Pagination } from "./components/Pagination";

export const App = () => {
  const [coinsData, setCoinsData] = useState([]);

  const[currentPage, setCurrentPage]= useState(1)
  const[countPerPage, setCountPerPage]=useState(8)

  const lastIndex = currentPage*countPerPage
  const firstIndex = lastIndex-countPerPage

  const totalCrypto = coinsData.length

  const currentPost = coinsData.slice(firstIndex, lastIndex)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        setCoinsData(response.data)
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>Crypto Gallery</h1>
      <CryptoList coinsData={currentPost} />
      <Pagination
        totalCrypto={totalCrypto}
        countPerPage={countPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
