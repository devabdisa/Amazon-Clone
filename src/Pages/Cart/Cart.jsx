import { useContext } from "react";
import { Type } from "../../Utility/action.type";
import { DataContext } from "../../components/DataProvider/DataProvider";
import Layout from "../../components/LayOut/LayOut";
import styles from "./Cart.module.css";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormatter from "../../components/CurrencyFormatter/CurrencyFormatter";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);
  let total = basket.reduce((amount, item) => {
    return item.price + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <>
      <Layout>
        <section className={styles.container}>
          <div className={styles.cart__container}>
            <h2>Hello</h2>
            <h3>Your Shopping Basket</h3>
            <hr />
            {basket?.length == 0 ? (
              <p>Opps! No item in your cart</p>
            ) : (
              basket?.map((item, index) => {
                return (
                  <section className={styles.cart_product}>
                    <ProductCard
                      product={item}
                      key={index}
                      renderDesc={true}
                      flex={true}
                      renderAdd={false}
                    />
                    <div className={styles.btn_container}>
                      <button
                        className={styles.btn}
                        onClick={() => increment(item)}
                      >
                        {<IoIosArrowUp size={24} />}
                      </button>
                      <span>{item.amount}</span>
                      <button
                        className={styles.btn}
                        onClick={() => decrement(item.id)}
                      >
                        <IoIosArrowDown size={24} />
                      </button>
                    </div>
                  </section>
                );
              })
            )}
          </div>
          {basket?.length !== 0 && (
            <div className={styles.subtotal}>
              <div>
                <p>Subtotal ({basket?.length} items)</p>
                <CurrencyFormatter amount={total} />
              </div>
              <span>
                <input type="checkbox" />
                <small>This order contains a gift</small>
              </span>
              <Link to="/payments">Continue to checkout</Link>
            </div>
          )}
        </section>
      </Layout>
    </>
  );
}

export default Cart;
