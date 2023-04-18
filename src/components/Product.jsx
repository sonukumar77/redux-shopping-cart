import "./Product.css";
import { useEffect } from "react";
import SingleCard from "./SingleCard";
import { useSelector, useDispatch } from "react-redux";
import { setProductActionCreator } from "./redux/action";

const Product = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((storeData) => storeData);

  useEffect(() => {
    // console.log(products?.length, typeof products);
    if (products?.length === 0 || products?.length === undefined) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          // console.log("load");
          dispatch(setProductActionCreator(data));
        });
    }
  }, []);

  return (
    <div className="product-container">
      {products?.length > 0 ? (
        products?.map((element, i) => {
          return (
            <SingleCard key={element.id} {...element} dispatch={dispatch} />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;
