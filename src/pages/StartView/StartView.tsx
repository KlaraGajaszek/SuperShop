import React from 'react';

import BoxProduct from '../../components/moleculs/BoxProduct/BoxProduct';
import { Box } from './StartViewStyles';

export type ModelFormType = {
  modalVisible: boolean;
};
const StartView = () => {
  return (
    <Box>
      <BoxProduct />
    </Box>
  );
};

export default StartView;
