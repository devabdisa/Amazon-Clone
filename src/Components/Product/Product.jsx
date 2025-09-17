import React, { useEffect, useState } from "react";
import classes from "./Product.module.css";
import axios from "axios";
import ProductCard from "./ProductCard";
import Spinner from "../Loader/Spinner";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        let request = await axios.get("https://fakestoreapi.com/products");
        console.log(request);
        setProducts(request.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    })();
  }, []);
  console.log(products);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className={classes.products__container}>
          {products?.map((singleProdut) => (
            <ProductCard
              key={singleProdut.id}
              renderAdd={true}
              product={singleProdut}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
