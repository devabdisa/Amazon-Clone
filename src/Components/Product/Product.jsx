import { useEffect, useState } from "react";
import classes from "./product.module.css";
import axios from "axios";
import ProductCard from "./ProductCard";
function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className={classes.products_container}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default Product;
