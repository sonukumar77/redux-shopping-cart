import {
  setAddToCartActionCreator,
  setRemoveFromCartActionCreator
} from "./redux/action";
import { useSelector, useDispatch } from "react-redux";
import "./CartCard.css";

const CartCard = (props) => {
  const { id, description, price, category, image, title, rating } = props;

  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} alt="product_image" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>
          Desc :
          {description?.length > 30
            ? `${description?.substring(0, 30)}...`
            : description}
        </p>
        <p>Category :{category}</p>
        <p>Rating : {rating?.rate}</p>
        <p>$ {price}</p>
        <p>Qty : {rating?.count}</p>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => dispatch(setRemoveFromCartActionCreator(id))}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CartCard;
