import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
