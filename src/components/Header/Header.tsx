import React from 'react';
import { ReactComponent as Supershop } from '../../assests/SUPERSHOP.svg';
import { HeaderBlock, CategoryBox } from './HeaderStyles';

const Header = () => {
  return (
    <HeaderBlock>
      <Supershop />
      <CategoryBox>
        <li>Link1</li>
        <li>Link2</li>
        <li>Link3</li>
        <li>Link3</li>
      </CategoryBox>
    </HeaderBlock>
  );
};

export default Header;
