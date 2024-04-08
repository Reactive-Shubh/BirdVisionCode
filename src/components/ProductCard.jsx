import { useEffect } from "react";
import "../styles/ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ title, price, thumbnail, productId }) {
  return (
    <Link to={`/products/${productId}`}>
      <div className="productCard">
        <img src={thumbnail} alt={title} />
        <br />
        <div className="cardInfo">
          <p>{title}</p>
          <h4>${price}</h4>
        </div>
      </div>
    </Link>
  );
}
