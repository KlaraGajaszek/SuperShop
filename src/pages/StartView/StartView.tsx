import React from 'react';

import BoxProduct from '../../components/moleculs/BoxProduct/BoxProduct';
import { Box } from './StartViewStyles';
import data from '../../utils/data';

export type ModelFormType = {
  modalVisible: boolean;
};
const StartView = () => {
  return (
    <Box>
      <BoxProduct data={data} />
    </Box>
  );
};

export default StartView;
