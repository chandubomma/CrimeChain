import React, { useContext } from "react";
import { GiCheckedShield } from 'react-icons/gi';
import { ContractsContext } from "../context/ContractsContext";
import { useNavigate } from "react-router-dom";

const { ethereum } = window;

const LandingPage = () => {
  const {  connectWallet,checkIfWalletIsConnect } = useContext(ContractsContext);
  let navigate = useNavigate();
  const onClickHandler =async ()=>{
      if(!ethereum)alert("Please install Metamask!");
      else{
        await connectWallet();
        if(checkIfWalletIsConnect())navigate('/user');
      } 
  }
  return (
    <div className='bg-black w-screen h-screen flex flex-col'>
      <h1 className='text-[8rem] font-extrabold text-gray-300 w-fit m-auto mt-60 px-10 flex'><GiCheckedShield className='mt-8 mr-2'/>CrimeChain</h1>
      <button onClick={()=>onClickHandler()} className='text-xl font-medium text-gray-300 px-5 py-2 w-fit m-auto hover:scale-110 ease-in-out mb-48 glassmorph animate-pulse duration-500 hover:animate-none'>Connect Wallet</button>
    </div>
  )
}

export default LandingPage
