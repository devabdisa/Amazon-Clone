import { useContext, useState } from "react";
import classes from "./Auth.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { PulseLoader } from "react-spinners";
function Auth() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigationState = useLocation();

  const authHandler = (e) => {
    e.preventDefault();
    if (e.target.name === "signin") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userData) => {
          dispatch({ type: "SET_USER", user: userData.user });
          setLoading({ ...loading, signIn: false });
          navigate(`${navigationState?.state?.redirect || "/"}`);
        })
        .catch((err) => {
          setErrorMessage(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userData) => {
          dispatch({ type: "SET_USER", user: userData.user });
          setLoading({ ...loading, signUp: false });
          navigate(`${navigationState?.state?.redirect || "/"}`);
        })
        .catch((err) => {
          setErrorMessage(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };
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
        {navigationState?.state?.msg && (
          <small
            style={{
              padding: "7px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navigationState.state.msg}
          </small>
        )}

        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            name="signin"
            onClick={authHandler}
            className={classes.login__signInButton}
          >
            {loading.signIn ? (
              <PulseLoader color="#000" size={10} />
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON CLONE website Conditions of Use
          & Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* create account btn */}
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login__registerButton}
        >
          {loading.signUp ? (
            <PulseLoader color="#000" size={10} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {errorMessage && (
          <small style={{ paddingTop: "5px", color: "red" }}>
            {errorMessage}
          </small>
        )}
      </div>
    </section>
  );
}

export default Auth;
