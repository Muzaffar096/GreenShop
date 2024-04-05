import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ProductView from "./pages/ProductView";
import ProductCart from "./pages/Shop/CartSummary/ProductCart";
import ProductCheckout from "./pages/Shop/CheckOut/ProductCheckout";
import Shop from "./pages/Shop/Shop";
import Blogs from "./pages/Blogs/Blogs";
import ScrollToTopOnNavigation from "/src/JavaScript/ScrollToTopOnNavigation.js";
import Wishlist from "./pages/Shop/Wishlist/Wishlist";
import Profile from "./pages/Profile/Profile";
import PlantCare from "./pages/PlantCare/PlantCare";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTopOnNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:id" element={<ProductView />} />
        <Route path="/shop/cart" element={<ProductCart />} />
        <Route path="/shop/checkout" element={<ProductCheckout />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/plantCare" element={<PlantCare />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="/shop/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
