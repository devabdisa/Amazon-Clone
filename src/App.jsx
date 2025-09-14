import CarouselBanner from "./Components/Carousel/Carousel";
import Category from "./Components/Category/Category";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";

const App = () => {
  return (
    <>
      <Header />
      <CarouselBanner />
      <Category/>
      <Product/>
    </>
  );
};

export default App;
