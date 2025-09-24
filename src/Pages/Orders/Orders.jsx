import { useContext, useEffect, useState } from "react";
import Layout from "../../components/LayOut/LayOut";
import styles from "./Orders.module.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { db } from "../../Utility/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import ProductCard from "../../Components/Product/ProductCard";
function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // Older SDk synthax
      // db.collection("users")
      //   .doc(user.uid)
      //   .collection("orders")
      //   .orderBy("created", "desc")
      //   .onSnapShot((snapShot) => console.log(snapShot));

      // Modular SDK
      onSnapshot(
        query(
          collection(db, "users", user.uid, "orders"),
          orderBy("created", "desc")
        ),
        (snapshot) => {
          console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        }

        // .docs.map((doc) => doc.data())
      );
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.orders__container}>
          <h2>Your Orders</h2>
          {/* ordered items */}
          {orders?.length == 0 && (
            <div>
              <p>You don't have orders yet</p>
            </div>
          )}
          <div>
            {orders?.map((eachOrder, i) => (
              <div key={i}>
                <hr />
                <p>Order ID: {eachOrder?.id}</p>
                {eachOrder?.data?.basket?.map((order, index) => (
                  <ProductCard product={order} key={index} flex={true} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
