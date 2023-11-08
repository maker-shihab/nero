import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";

const PriceTable = ({ data }) => {
  const { header, price, btnLink, button, features } = data;

  return (
    <div className="priceTable blog_card">
      <div className="pricingTabel_top">
        <h4 className="pricingHeader global_subtitle">{header}</h4>
        <h2 className="pricingTitle">{price}</h2>
      </div>
      <ul className="pricingList">
        {
          features.map((item, index) => (
            <li key={index}> <AiFillCheckCircle /> {item}</li>
          ))
        }
      </ul>
      <Link href={btnLink} className="pricingButton">
        {button}
      </Link>
    </div>
  );
}

export default PriceTable;
