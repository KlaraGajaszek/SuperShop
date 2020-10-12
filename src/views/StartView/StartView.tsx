import React, { FC } from 'react';
import BoxProduct from '../../components/moleculs/BoxProduct/BoxProduct';
import { Box } from './StartViewStyles';
import { PropsProduct } from '../../models/Product';

const StartView = () => {
  return (
    <Box>
      <BoxProduct />
    </Box>
  );
};

export default StartView;
