import { createStore } from 'redux';

// Define your initial state
const initialState = {
  cart: [],
};

// Define your reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
      case 'DELETE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
