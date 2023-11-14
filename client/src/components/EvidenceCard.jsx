import React, { useContext, useEffect, useState } from 'react'
import { ContractsContext } from '../context/ContractsContext'

const EvidenceCard = ({evidenceId}) => {
  // let Evidence = {
  //   collectedBy:"0XUB40HBJDS6DCV8HDVSV266", 
  //   description:"knife covered with traces of blood",
  //   location:"Chennai"
  // }
  const [Evidence,setEvidence] = useState(null);
  const {evidence} = useContext(ContractsContext)
  useEffect(()=>{
    async function fetchEvidence(){
      const temp = await evidence.getEvidenceDetails(evidenceId);
      setEvidence(temp);
    }
    fetchEvidence();
  },[])
  return (
    <div className='transition-all duration-500 ease-in-out bg-gray-200 p-4 rounded-lg mt-4 glassmorph w-48 h-full flex flex-col text-sm font-semibold '>
     {
      Evidence!=null &&
      <div>
        <p>{Evidence.description.toString()}</p>
        <p>{Evidence.collectedBy.toString().slice(0,10)+"..."}</p>
        <p>{Evidence.location.toString()}</p>
      </div>
     }
    </div>
  )
}

export default EvidenceCard
