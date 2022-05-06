import { DELETE_CART, MOVE_QUANTITY, SET_CART } from "../types/CartType";
const cartLocal = localStorage.getItem("CART");
const initialState = {
  carts: JSON.parse(cartLocal),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      let index = state.carts.findIndex((e) => e.slug === action.product.slug);
      if (index != -1) {
        let indexColor = state.carts[index].colors.findIndex(
          (iColor) => iColor === action.product.colors[0]
        );
        if (indexColor == -1) {
          state.carts[index].colors.push(action.product.colors[0]);
        }
        let indexSize = state.carts[index].sizes.findIndex(
          (iSize) => iSize === action.product.sizes[0]
        );
        if (indexSize == -1) {
          state.carts[index].sizes.push(action.product.sizes[0]);
        }
        state.carts[index].quantity += 1;
      } else {
        state.carts.push(action.product);
      }

      state.carts = [...state.carts];
      localStorage.setItem("CART", JSON.stringify(state.carts));
      return { ...state };
    case MOVE_QUANTITY: {
      let index = state.carts.findIndex(
        (cart) => cart.slug === action.product.slug
      );
      if (index !== -1) {
        if (state.carts[index].quantity - 1 >= 1) {
          state.carts[index].quantity += action.number;
        } else if(state.carts[index].quantity - 1 == 0) {
          state.carts.splice(index, 1)
        }
      }
      state.carts = [...state.carts];
      localStorage.setItem("CART", JSON.stringify(state.carts));
      return { ...state };
    }

    case DELETE_CART: {
        let index = state.carts.findIndex(
          (cart) => cart.slug === action.product.slug
        );
        if (index !== -1) {
            state.carts.splice(index, 1)
        }
        state.carts = [...state.carts];
        localStorage.setItem("CART", JSON.stringify(state.carts));
        return { ...state };
      }

    default:
      return state;
  }
};
