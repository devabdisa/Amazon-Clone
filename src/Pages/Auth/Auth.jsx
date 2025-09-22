import classes from "./Auth.module.css";
import { Link } from "react-router-dom";


function Auth() {
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>

        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit" name="signin">
            Sign in
          </button>
        </form>

        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON CLONE website Conditions of Use
          & Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* create account btn */}
        <button type="submit" name="signup">Create your Amazon Account</button>
      </div>
    </section>
  );
}

export default Auth;
