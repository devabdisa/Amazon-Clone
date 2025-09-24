import { Type } from "./action.type";

// Load basket from localStorage if it exists, else use an empty array
const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];

export const initialState = {
  basket: storedBasket,
  user: null,
};

// Function to update localStorage
const updateLocalStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

// reducer listens for actions and modifies the state accordingly
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );

      let updatedBasket;
      if (!existingItem) {
        updatedBasket = [...state.basket, { ...action.item, amount: 1 }];
      } else {
        updatedBasket = state.basket.map((item) =>
          item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      updateLocalStorage(updatedBasket); // Save to localStorage
      return { ...state, basket: updatedBasket };

    case Type.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          newBasket.splice(index, 1);
        }
      }

      updateLocalStorage(newBasket); // Save to localStorage
      return { ...state, basket: newBasket };

    case Type.EMPTY_BASKET:
      updateLocalStorage([]); // Clear localStorage
      return { ...state, basket: [] };

    case Type.SET_USER:
      return { ...state, user: action.user };

    default:
      return state;
  }
};
