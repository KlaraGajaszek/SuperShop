import React, { FC } from 'react';
import { ReactComponent as Supershop } from '../../../assests/SUPERSHOP.svg';
import { HeaderBlock, LiItem, NavbarContainerUl, AItem } from './HeaderStyles';

type Titles = Record<
  | 'title1'
  | 'title2'
  | 'title3'
  | 'title4'
  | 'link1'
  | 'link2'
  | 'link3'
  | 'link4',
  string
>;
const Header: FC<Titles> = ({
  title1,
  title2,
  title3,
  title4,
  link1,
  link2,
  link3,
  link4,
}) => {
  return (
    <HeaderBlock>
      <Supershop />
      <NavbarContainerUl>
        <LiItem>
          <AItem href={link1}>{title1}</AItem>
        </LiItem>
        <LiItem>
          <AItem href={link2}>{title2}</AItem>
        </LiItem>
        <LiItem>
          <AItem href={link3}>{title3}</AItem>
        </LiItem>
        <LiItem>
          <AItem href={link4}>{title4}</AItem>
        </LiItem>
      </NavbarContainerUl>
    </HeaderBlock>
  );
};

export default Header;
