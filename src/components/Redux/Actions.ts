import { IDishInfo } from "../../interface/interface";
import * as type from "./Types";

export const dispatchDish = (data: IDishInfo) => ({
  type: type.SAVE_DISH,
  payload: data,
});
