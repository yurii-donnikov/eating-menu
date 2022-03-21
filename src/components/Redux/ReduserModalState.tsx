import { FUNC_COPY_UPDATE_MODAL } from "./Types";
interface IReduserModalState {
  type: string;
  updateModal(): void;
}

const defaultState = {};

export const ReduserModalState = (
  state = defaultState,
  action: IReduserModalState
) => {
  switch (action.type) {
    case FUNC_COPY_UPDATE_MODAL:
      state = action.updateModal;
      return state;
    default:
      return state;
  }
};
