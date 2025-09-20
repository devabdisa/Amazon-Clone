import { useContext } from "react";
import CurrencyFormatter from "../CurrencyFormatter/CurrencyFormatter";
import classes from "./product.module.css";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { DataContext } from "../DataProvider/DataProvider";

function ProductCard({ product, flag, cart }) {
  const { image, title, rating, price, id, description } = product;

  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        title,
        image,
        id,
        price,
        rating,
        description,
      },
    });
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
