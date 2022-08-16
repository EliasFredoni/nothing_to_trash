import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Login from "./pages/login";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Maketplace from "./pages/marketplace";
import Set_product from "./pages/set_product";
import Wishlist from "./pages/wishlist";
import Already_sold from "./pages/already_sold";
import Product_detail from "./pages/product_detail";
import About_us from "./pages/about_us";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="marketplace" element={<Maketplace />} />
        <Route path="set_product" element={<Set_product />} />
        <Route path="product_details" element={<Product_detail />} />
        <Route path="sold" element={<Already_sold />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="about_us" element={<About_us />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
