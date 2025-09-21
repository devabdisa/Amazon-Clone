import  { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Results.module.css";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endPoints"; 
import Layout from "../../components/LayOut/LayOut";
import ProductCard from "../../components/Product/ProductCard";
import Spinner from "../../Components/Loader/Spinner";


function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        let request = await axios.get(
          `${productUrl}/products/category/${categoryName}`
        );
        console.log(request);
        setResults(request.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <Layout>
        <section className={classes.results__container}>
          <h1 style={{ padding: "2rem" }}>Results</h1>
          <p style={{ padding: "2rem" }}>Category / {categoryName}</p>
          <hr />
          {isLoading ? (
            <Spinner />
          ) : (
            <div className={classes.products__container}>
              {results?.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  renderDesc={false}
                  renderAdd={true}
                />
              ))}
            </div>
          )}
        </section>
      </Layout>
    </>
  );
}

export default Results;
