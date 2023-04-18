import "./Cart.css";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

const Cart = () => {
  const { cart } = useSelector((storeData) => storeData);
  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        cart?.map((element, i) => {
          return <CartCard key={element.id} {...element} />;
        })
      ) : (
        <p style={{ color: "red", fontSize: "2rem" }}>Cart is Empty</p>
      )}
    </div>
  );
};

export default Cart;
