import React from 'react';
import { useState } from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";

const HoverEffectText = ({text}) => {
  const [isHovered, setIsHovered] = useState(false);
  let navigate = useNavigate();

  return (
   <div className='flex justify-center'>
     <div className="flex  text-center w-2/3">
      <div
        className=" text-gray-500 transition-transform transform rotate-0 hover:rotate-180"
        style={{ display: isHovered ? 'block' : 'none' }}
      >
        <BiSolidRightArrow/>
      </div>
      <div
        className="text-gray-300 text-sm font-semibold transition-transform transform hover:translate-x-1 ml-2 hover:cursor-pointer "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={()=>navigate(text.split(" ").join("").toLowerCase())}
      >
       {text}
      </div>
    </div>
   </div>
  );
};

export default HoverEffectText;
