import "../App.css";
export const CryptoCard = ({ name, price, img }) => {
  return (
    <div className="card">
      <div className="card_image">
        <img src={img} alt={name} />
      </div>
      <div className="card_info">
        <h2>{name}</h2>
        <h3>${price.toLocaleString()}</h3>
      </div>
    </div>
  );
};
