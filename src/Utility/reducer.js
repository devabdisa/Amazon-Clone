import { Type } from "./action.type";

// Load basket from localStorage if it exists, else use an empty array
const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];

export const initialState = {
  basket: storedBasket,
  user: null,
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET: {
      const existingIndex = state.basket.findIndex(
        (item) => item.id === action.item.id
      );

      if (existingIndex >= 0) {
        // Increase quantity if item exists
        const updatedBasket = [...state.basket];
        updatedBasket[existingIndex] = {
          ...updatedBasket[existingIndex],
          amount: (updatedBasket[existingIndex].amount || 1) + 1,
        };

        return {
          ...state,
          basket: updatedBasket,
        };
      } else {
        // Add new item with amount = 1
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      }
    }

    case Type.REMOVE_FROM_BASKET: {
      const existingIndex = state.basket.findIndex(
        (item) => item.id === action.id
      );

      if (existingIndex >= 0) {
        const updatedBasket = [...state.basket];
        if ((updatedBasket[existingIndex].amount || 1) > 1) {
          // Decrease amount if more than 1
          updatedBasket[existingIndex] = {
            ...updatedBasket[existingIndex],
            amount: updatedBasket[existingIndex].amount - 1,
          };
        } else {
          // Remove item completely
          updatedBasket.splice(existingIndex, 1);
        }

        return {
          ...state,
          basket: updatedBasket,
        };
      }
      return state;
    }

    default:
      return state;
  }
};
