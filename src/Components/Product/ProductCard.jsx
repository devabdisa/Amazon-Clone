import { useState } from "react";
import CurrencyFormatter from "../CurrencyFormatter/CurrencyFormatter";
import classes from "./product.module.css";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

function ProductCard({ product, flag, cart }) {
  const { image, title, rating, price, id, description } = product;

  // Local state to manage basket
  const [basket, setBasket] = useState([]);

  const addToCart = () => {
    setBasket((prevBasket) => [...prevBasket, product]);
    console.log([...basket, product]);
  };

  return (
    <div
      className={`${classes.card__container} ${
        flag ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/product/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>

      <div>
        <h3>{title}</h3>
        {flag && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormatter amount={price} />
        </div>

        {!cart && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
