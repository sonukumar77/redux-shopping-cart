import {
  setAddToCartActionCreator,
  setRemoveFromCartActionCreator
} from "./redux/action";
import "./SingleCard.css";

const SingleCard = (props) => {
  const {
    id,
    description,
    price,
    category,
    image,
    title,
    rating,
    cartItem,
    dispatch
  } = props;
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
        <button onClick={() => dispatch(setAddToCartActionCreator(props))}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
