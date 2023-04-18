const INITIAL_STATE = {
  isLoggedIn: false,
  userName: "",
  inputValue: "",
  cart: [],
  products: null
};

const myReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_CHECK":
      return { ...state, isLoggedIn: action.payload };
    case "SET_USERNAME":
      return { ...state, userName: action.payload };
    case "SET_INPUT":
      return { ...state, inputValue: action.payload };
    case "SET_PRODUCT":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case "REMOVE_FROM_CART": {
      const filterData = state?.cart.filter(
        (product) => product.id !== action.id
      );

      return { ...state, cart: filterData };
    }

    default: {
      return state;
    }
  }
};

export default myReducer;
