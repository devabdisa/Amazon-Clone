import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import styles from "./Header.module.css";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <section className={styles.fixed}>
      <section>
        <div className={styles.header__container}>
          {/* logo section */}
          <div className={styles.logo__container}>
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />

            <div className={styles.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search section */}
          <div className={styles.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={38} />
          </div>
          {/* other section */}
          <div className={styles.order__container}>
            {/* <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
              alt=""
            /> */}

            <select name="" id="">
              <option value="">EN</option>
            </select>

            <p>returns</p>
            <span>& Orders</span>

            <BiCart size={35} />
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
