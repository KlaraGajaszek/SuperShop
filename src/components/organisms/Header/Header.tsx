import React, { FC } from 'react';
import { ReactComponent as Supershop } from '../../../assests/SUPERSHOP.svg';
import { HeaderBlock, LiItem, NavbarContainerUl, AItem } from './HeaderStyles';
import { LinkHeader } from '../../../utils/data';

export type HeaderType = {
  link: string;
  title: string;
};

const Header = () => {
  return (
    <HeaderBlock>
      <Supershop />
      <NavbarContainerUl>
        {LinkHeader.map((link) => (
          <LiItem>
            <AItem href={link.route}>{link.title}</AItem>
          </LiItem>
        ))}
      </NavbarContainerUl>
    </HeaderBlock>
  );
};

export default Header;
