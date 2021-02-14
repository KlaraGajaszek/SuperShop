import React from 'react';

import { AddProductsModal } from './AddProductsModal/AddProductsModal';
import { ModalName } from './modalNames';
import { useSelector } from 'react-redux';

export const ModalContainer = () => {
  const modal = useSelector((state: any) => state.modalReducer.modal);

  return <>{modal === ModalName.ADD_PRODUCT_FORM && <AddProductsModal />}</>;
};
