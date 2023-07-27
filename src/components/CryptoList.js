import { CryptoCard } from "./CryptoCard";
import "../App.css";

const CryptoList = ({coinsData}) => {
    return (
      <div className="crypto_list">
        {coinsData.map((c, i) => {
          return (
            <CryptoCard
              key={i}
              name={c.name}
              price={c.current_price}
              img={c.image}
            />
          );
        })}
      </div>
    );
}

export default CryptoList;

