import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./page/Home";
import Shop from "./page/Shop";
import Cart from "./page/Cart";
import About from "./page/About";
import Notfound from "./page/Notfound";
import Pint from "./page/Pint";
import Bar from "./page/Bar";
import Cookie from "./page/Cookie";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/shop/pint" element={<Pint />}></Route>
        <Route path="/shop/bar" element={<Bar />}></Route>
        <Route path="/shop/cookie" element={<Cookie />}></Route>
        <Route path="*" element={<Notfound />}></Route>

        <Route path="/home" element={<Navigate to="/" />}></Route>
        <Route path="/info" element={<Navigate to="/about" />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
