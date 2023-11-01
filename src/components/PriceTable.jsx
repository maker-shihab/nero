
const PriceTable  = ({ title, description, price }) => {
  return (
    <div className="price-table">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>${price} per Month</p>
    </div>
  );
}

export default PriceTable;
