import { IAction } from "../../interface/interface";
import { SAVE_DISH } from "./Types";

const defaultState = {
  dishes: [],
};

export const Reduser = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case SAVE_DISH:
      const dishInfo = {
        ...state,
        dishes: [...state.dishes, action.payload],
      };
      localStorage.setItem("dish", JSON.stringify(dishInfo));
      return dishInfo;
    default:
      return state;
  }
};
