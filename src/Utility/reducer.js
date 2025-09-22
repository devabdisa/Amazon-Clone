export const initialState = {
  basket: [],
  user: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET": // logic to avoid adding similar products to the basket rather updating their quantity
    {
      const itemExist = state.basket.find(
        (product) => product.id === action.item.id
      );
      if (!itemExist)
        return {
          ...state,
          basket: [...state.basket, { ...action.item, quantity: 1 }],
        };
      else {
        const updatedBasket = state.basket?.map((product) =>
          product.id === action.item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );

        return { ...state, basket: updatedBasket };
      }
    }

    case "REMOVE_FROM_BASKET": {
      const newBasket = [...state.basket];
      const indexOfRemovedItem = newBasket.findIndex(
        (item) => item.id === action.id
      );
      if (indexOfRemovedItem !== -1) {
        if (newBasket[indexOfRemovedItem].quantity === 1) {
          newBasket.splice(indexOfRemovedItem, 1);
        } else {
          newBasket[indexOfRemovedItem].quantity -= 1;
        }
      }
      return { ...state, basket: newBasket };
    }

    case "EMPTY_BASKET":
      return { ...state, basket: [] };

    case "SET_USER":
      return { ...state, user: action.user };
    default:
      return state;
  }
}
