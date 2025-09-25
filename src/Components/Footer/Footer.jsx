import classes from "./Footer.module.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className={classes.footer__container}>
      <div className={classes.back_to_top}>
        <p onClick={scrollToTop}>Back to top</p>
      </div>
      <div className={classes.footer_links}>
        <div className={classes.footer_column}>
          <h4>Get to Know Us</h4>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Amazon Newsletter</a>
            </li>
            <li>
              <a href="#">About Amazon</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Sustainability</a>
            </li>
            <li>
              <a href="#">Press Center</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Amazon Devices</a>
            </li>
            <li>
              <a href="#">Amazon Science</a>
            </li>
          </ul>
        </div>
        <div className={classes.footer_column}>
          <h4>Make Money with Us</h4>
          <ul>
            <li>
              <a href="#">Sell on Amazon</a>
            </li>
            <li>
              <a href="#">Sell apps on Amazon</a>
            </li>
            <li>
              <a href="#">Supply to Amazon</a>
            </li>
            <li>
              <a href="#">Protect & Build Your Brand</a>
            </li>
            <li>
              <a href="#">Become an Affiliate</a>
            </li>
            <li>
              <a href="#">Become a Delivery Driver</a>
            </li>
            <li>
              <a href="">Start a Package Delivery Business</a>
            </li>
            <li>
              <a href="">Advertise Your Products</a>
            </li>
            <li>
              <a href="">Self-Publish with Us</a>
            </li>
            <li>
              <a href="">Become an Amazon Hub Partner</a>
            </li>
            <li>
              <a href="">See More Ways to Make Money</a>
            </li>
          </ul>
        </div>
        <div className={classes.footer_column}>
          <h4>Amazon Payment Products</h4>
          <ul>
            <li>
              <a href="">Amazon Visa</a>
            </li>
            <li>
              <a href="">Amazon Store Card</a>
            </li>
            <li>
              <a href="">Amazon Secured Card</a>
            </li>
            <li>
              <a href="#">Amazon Business Card</a>
            </li>
            <li>
              <a href="#">Shop with Points</a>
            </li>
            <li>
              <a href="#">Reload Your Balance</a>
            </li>
            <li>
              <a href="">Gift Cards</a>
            </li>
            <li>
              <a href="#">Amazon Currency Converter</a>
            </li>
          </ul>
        </div>
        <div className={classes.footer_column}>
          <h4>Let Us Help You</h4>
          <ul>
            <li>
              <a href="#">Amazon and COVID-19</a>
            </li>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Your Orders</a>
            </li>
            <li>
              <a href="#">Shipping Rates & Policies</a>
            </li>
            <li>
              <a href="">Amazon Prime</a>
            </li>
            <li>
              <a href="#">Returns & Replacements</a>
            </li>
            <li>
              <a href="">Manage Your Content and Devices</a>
            </li>
            <li>
              <a href="">Recalls and Product Safety Alerts</a>
            </li>
            <li>
              <a href="">Registry & Gift List</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.footer_bottom_container}>
        <div className={classes.footer_logo}>
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </div>
        <div className={classes.language_country}>
          <div className={classes.language_dropdown}>
            <img src="" alt="" />
            <select name="" id="">
              <option value=""> English </option>
            </select>
          </div>
          <div className={classes.country_dropdown}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
              alt=""
            />
            <select name="" id="">
              <option value=""> United States</option>
            </select>
          </div>
        </div>
      </div>
      <div className={classes.footer_bottom}>
        <p>Conditions of Use | Privacy Notice | Your Ads Privacy Choices</p>
        <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
      </div>
    </section>
  );
}

export default Footer;
