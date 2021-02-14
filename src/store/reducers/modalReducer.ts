import { ModalName } from '../../modals/modalNames'

type initialStateType<T> = {
  modal: string;
  payload: T;
  callback: () => void;
};

const initialState: initialStateType<{}> = {
  modal: ModalName.NONE,
  payload: {},
  callback: () => { },
};

export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_ALL = "HIDE_ALL"


export const load = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, modal: action.modal, payload: { ...action.payload } || {}, callback: action.callback };
    case HIDE_ALL:
      return { modal: ModalName.NONE }
    default:
      return state;
  }
};