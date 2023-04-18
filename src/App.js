import { useContext } from "react";
import { myContext } from "./components/context";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Nav from "./components/Nav";
import { useSelector } from "react-redux";

import "./styles.css";
import Input from "./components/Input";
import Product from "./components/Product";
import Cart from "./components/Cart";

export default function App() {
  // const { isLoggedIn } = useContext(myContext);
  // const { isLoggedIn } = useSelector((storeData) => storeData);
  return (
    <div className="App">
      {/* {isLoggedIn ? ( */}
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<Input />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </>
      {/* ) : (
        <Login />
      )} */}
    </div>
  );
}
