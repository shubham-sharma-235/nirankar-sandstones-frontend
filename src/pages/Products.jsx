import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductMainBreadcrum from '../components/ProductMain/ProductMainBreadcrum';
import ProductMain from "../components/ProductMain/ProductMain";

function Products() {
  return (
    <>
      <Header/>
      <ProductMainBreadcrum/>
      <ProductMain/>
      <Footer/>
    </>
  )
}

export default Products;