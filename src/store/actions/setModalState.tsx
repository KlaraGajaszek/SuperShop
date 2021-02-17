import { ModalName } from '../../modals/modalNames';

const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_ALL = 'HIDE_ALL';

type AddProductsType = {
  modal: ModalName.ADD_PRODUCT_FORM;
  payload: {
    name: string;
  };
};

export const showModal = (modalConfig: AddProductsType) => {
  const { modal, payload } = modalConfig;
  return {
    type: SHOW_MODAL,
    modal,
    payload,
  };
};

export const closeModal = () => {
  return {
    type: HIDE_ALL,
  };
};
