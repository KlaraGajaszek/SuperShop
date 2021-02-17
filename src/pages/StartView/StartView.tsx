import React from 'react';

import BoxProduct from '../../components/moleculs/BoxProduct/BoxProduct';
import data from '../../utils/data';

export type ModelFormType = {
  modalVisible: boolean;
};
const StartView = () => {
  return (
    <div className="min-h-screen justify-center flex  #FBFBFBs">
      <div className="flex-1 max-w-7xl mt-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3 md:gap-8">
          <BoxProduct data={data} />
        </div>
        <div>Wato zobaczyć</div>
      </div>
    </div>
  );
};

export default StartView;
