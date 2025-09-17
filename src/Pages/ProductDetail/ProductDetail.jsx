import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../Components/LayOut/LayOut";
import ProductCard from "../../Components/Product/ProductCard";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
    <ProductCard product={product} />
    </Layout>
  );
}

export default ProductDetail;
