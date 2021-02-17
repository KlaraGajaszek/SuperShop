import { ModalName } from '../../modals/modalNames';

const initialState: any = {
  modal: ModalName.NONE,
  payload: {},
};

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_ALL = 'HIDE_ALL';

export const load = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modal: action.modal,
        payload: { ...action.payload } || {},
      };
    case HIDE_ALL:
      return { modal: ModalName.NONE };
    default:
      return state;
  }
};
