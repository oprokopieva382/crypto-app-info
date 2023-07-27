import { CryptoCard } from "./CryptoCard";
import "../App.css";

export const CryptoList = ({coinData}) => {
    return (
        <div className="crypto_list">
            {coinData.map((c, i)=> {
                return (
                  <CryptoCard key={i} image={c.image} price={c.current_price} name={c.name}/>
                );
            })}
        </div>
    );
}

