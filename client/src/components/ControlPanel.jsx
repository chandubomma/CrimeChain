import React from 'react';
import HoverEffectText from './HoverEffectText';

const ControlPanel = () => {
  return (
    <div className="flex flex-col items-center justify-center">
       <div className="text-white w-full text-center mb-3">
            <h2 className="text-xl font-bold">Control Panel</h2>
        </div>
      <div className=" rounded-lg p-6 w-56 transform transition-transform scale-100 glassmorph ">
        <div className="space-y-4 flex flex-col">
          <HoverEffectText text="Search"/>
          <HoverEffectText text="Report Crime"/>
          <HoverEffectText text="Add Evidence"/>
          <HoverEffectText text="Add Identity"/>
          <HoverEffectText text="Add User"/>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
