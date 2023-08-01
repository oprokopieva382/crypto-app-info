import { CryptoCard } from "./CryptoCard";

export const CryptoList = ({ coinsData }) => {
  return (
    <div className="crypto_list">
      {coinsData.map((c, i) => {
        return (
          <CryptoCard
            name={c.name}
            key={i}
            price={c.current_price.toLocaleString()}
            img={c.image}
          />
        );
      })}
    </div>
  );
};
