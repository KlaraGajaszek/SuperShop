import React, { FC } from 'react';
import { ReactComponent as Supershop } from '../../../assests/SUPERSHOP.svg';
import { HeaderBlock, LiItem, NavbarContainerUl, AItem } from './HeaderStyles';

type Titles = {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
};

const Header: FC<Titles> = ({ title1, title2, title3, title4 }) => {
  return (
    <HeaderBlock>
      <Supershop />
      <NavbarContainerUl>
        <LiItem>
          <AItem href="default.asp">{title1}</AItem>
        </LiItem>
        <LiItem>
          <AItem href="default.asp">{title2}</AItem>
        </LiItem>
        <LiItem>
          <AItem href="default.asp">{title3}</AItem>
        </LiItem>
        <LiItem>
          <AItem href="default.asp">{title4}</AItem>
        </LiItem>
      </NavbarContainerUl>
    </HeaderBlock>
  );
};

export default Header;
