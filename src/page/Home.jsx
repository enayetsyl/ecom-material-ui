import Footer from "../Component/Footer";
import Header from "../Component/Header";
import PopularProduct from "../Component/PopularProduct";
import Review from "../Component/Review";
import Subscribe from "../Component/Subscribe";

const Home = () => {
  return (
    <div className="sm:space-y-20">
      <Header/>
      <PopularProduct/>
      <Subscribe/>
      <Review/>
      <Footer/>
    </div>
  );
};

export default Home;