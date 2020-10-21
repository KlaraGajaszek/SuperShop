import React from 'react';

import BoxProduct from '../../components/moleculs/BoxProduct/BoxProduct';
import { Box } from './StartViewStyles';

class StartView extends React.Component {
  render() {
    return (
      <Box>
        <BoxProduct />
      </Box>
    );
  }
}

export default StartView;
