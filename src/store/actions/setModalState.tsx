import { ModalName } from '../../modals/modalNames';

const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_ALL = 'HIDE_ALL';

type showModalTypes<T> = {
  modal: string;
  payload: T;
  callback: () => void;
};

export const showModal = (
  modal: string,
  payload: any = {},
  callback: () => Promise<void> = async () => {}
) => {
  return (dispatch: any) => {
    dispatch({
      type: SHOW_MODAL,
      modal,
      payload,
      callback,
    });
  };
};

export const closeModal = () => {
  return (dispatch: any) => {
    dispatch({
      type: HIDE_ALL,
    });
  };
};
