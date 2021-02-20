import React from 'react';

import BoxProduct from '../../components/moleculs/BoxProduct/BoxProduct';
import data from '../../utils/data';

export type ModelFormType = {
  modalVisible: boolean;
};
const StartView = () => {
  const getOnlyFirst10 = data.length < 10 ? data : data.slice(0, 10);
  return (
    <div className="min-h-screen justify-center flex flex-row #FBFBFBs mt-10">
      <div className="hidden md:block">CATEGORY</div>
      <div className="flex-1 max-w-8xl  ">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-4 md:gap-9">
          <BoxProduct data={getOnlyFirst10} />
        </div>
      </div>
    </div>
  );
};

export default StartView;
