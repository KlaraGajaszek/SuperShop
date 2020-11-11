import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Supershop } from '../../../assests/SUPERSHOP.svg';
import {
  HeaderBlock,
  LiItem,
  NavbarContainerUl,
  AItem,
  Icon,
} from './HeaderStyles';
import { LinkHeader } from '../../../utils/data';
import Modal from '../../moleculs/Modal/Modal';
import FormPage from '../../../pages/Form/FormPage';
import { ModelFormContext } from '../../../context/ModalFormProductsContext';
export type HeaderType = {
  link?: string;
  title: string;
};

const Header = () => {
  const { modalVisible, handleFormModal } = useContext(ModelFormContext);
  let history = useHistory();

  const handleClick = () => {
    history.push('/home');
  };

  return (
    <>
      <Modal
        content={'Add product'}
        show={modalVisible}
        clsFunction={() => {
          handleFormModal(false);
        }}
      >
        <FormPage />
      </Modal>
      <HeaderBlock>
        <Icon as={Supershop} onClick={handleClick} />
        <NavbarContainerUl>
          {LinkHeader.map((link) => (
            <LiItem key={link.route}>
              {link.key === 'route' ? (
                <AItem href={link.route}>{link.title}</AItem>
              ) : (
                <AItem
                  onClick={() => {
                    handleFormModal(true);
                  }}
                >
                  {link.title}
                </AItem>
              )}
            </LiItem>
          ))}
        </NavbarContainerUl>
      </HeaderBlock>
    </>
  );
};

export default Header;
