// import { combineReducers } from "redux";
// import products from "./products";
// import cart, * as fromCart from "./cart";

// export default combineReducers({
//   cart,
//   products,
// });

// const getAddedIds = (state) => fromCart.getAddedIds(state.cart);
// const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
// // const getProduct = (state, id) => fromProducts.getProduct(state.products, id);

// export const getTotal = (state) =>
//   getAddedIds(state)
//     .reduce(
//       (total, id) =>
//         total + getProduct(state, id).price * getQuantity(state, id),
//       0
//     )
//     .toFixed(2);

// export const getCartProducts = (state) =>
//   getAddedIds(state).map((id) => ({
//     ...getCartProducts(state, id),
//     quantity: getQuantity(state, id),
//   }));
