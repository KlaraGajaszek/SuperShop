import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  HeaderBlock,
  LiItem,
  NavbarContainerUl,
  AItem,
  Icon,
} from './HeaderStyles';
import { LinkHeader } from '../../../utils/data';
import { showModal } from '../../../store/actions/setModalState';
import { ModalName } from '../../../modals/modalNames';

export type HeaderType = {
  link?: string;
  title: string;
};

const Header = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push('/home');
  };

  return (
    <>
      <HeaderBlock>
        <NavbarContainerUl>
          {LinkHeader.map((link) => (
            <LiItem key={link.route}>
              {link.key === 'route' ? (
                <AItem href={link.route}>{link.title}</AItem>
              ) : (
                <AItem
                  onClick={() => {
                    dispatch(
                      showModal(ModalName.ADD_PRODUCT_FORM, '', async () =>
                        console.log('test')
                      )
                    );
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
