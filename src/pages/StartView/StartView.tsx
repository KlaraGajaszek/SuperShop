import React from 'react';

import BoxProduct from '../../components/moleculs/BoxProduct/BoxProduct';
import { Box } from './StartViewStyles';
import FormPage from '../Form/FormPage';

class StartView extends React.Component {
  render() {
    return (
      <Box>
        <FormPage />
        <BoxProduct />
      </Box>
    );
  }
}

export default StartView;
