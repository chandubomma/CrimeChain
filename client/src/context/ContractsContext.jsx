import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import {  crimeRecordAbi,
          evidenceAbi,
          identityAbi,
          userAbi,
          CRIMERECORD_CONTRACT_ADDRESS,
          EVIDENCE_CONTRACT_ADDRESS,
          IDENTITY_CONTRACT_ADDRESS,
          USER_CONTRACT_ADDRESS
           
        } from "../utils/Constants"; 


export const ContractsContext = React.createContext();

const { ethereum } = window;

let crimeRecord,evidence,identity,user;



export const ContractsProvider = ({children})=>{
    const [currentAccount, setCurrentAccount] = useState("");
    const [currentUser, setCurrentUser] = useState({});
    const [searchId,setSearchId] = useState(1);

    useEffect(()=>{
      if(ethereum)
      {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
      
        crimeRecord = new ethers.Contract(CRIMERECORD_CONTRACT_ADDRESS, crimeRecordAbi, signer);
        evidence = new ethers.Contract(EVIDENCE_CONTRACT_ADDRESS, evidenceAbi, signer);
        identity = new ethers.Contract(IDENTITY_CONTRACT_ADDRESS, identityAbi, signer);
        user = new ethers.Contract(USER_CONTRACT_ADDRESS, userAbi, signer);
    
      }
    },[])

    const checkIfWalletIsConnect = async () => {
        try {
          if (!ethereum) {
           // alert("Please install MetaMask.");
            return false;
          }
    
          const accounts = await ethereum.request({ method: "eth_accounts" });
    
          if (accounts.length) {
            setCurrentAccount(accounts[0]);
            return true;
    
          } else {
            console.log("No accounts found");
            return false;
          }
        } catch (error) {
          console.log(error);
        }
        return false;
      };

    const connectWallet = async () => {
        try {
          //if (!ethereum) return alert("Please install MetaMask.");
    
          const accounts = await ethereum.request({ method: "eth_requestAccounts", });
    
          setCurrentAccount(accounts[0]);
         // window.location.reload();
         
        } catch (error) {
          console.log(error);
    
          throw new Error("No ethereum object");
        }
      };

      return(
        <ContractsContext.Provider
        value={{
          checkIfWalletIsConnect,
          connectWallet,
          currentAccount,
          crimeRecord,
          evidence,
          identity,
          user,
          searchId,
          setSearchId,
        }}
      >
        {children}
      </ContractsContext.Provider>
      );
}
  