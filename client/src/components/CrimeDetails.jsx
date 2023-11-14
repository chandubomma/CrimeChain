import React, { useEffect } from 'react';
import EvidenceCard from './EvidenceCard';
import { useState,useContext } from 'react';
import { ContractsContext } from '../context/ContractsContext';

const CrimeDetails = ({setIsIdentityVisible,isVisible,setIId}) => {
  const [hoveredEvidence, setHoveredEvidence] = useState(null);
  const {searchId,crimeRecord} = useContext(ContractsContext);
  const [Crime,setCrime] = useState({
    crimeType: 'Theft',
    details: 'Stolen items from a store',
    location: 'City Center',
    id: 12345,
    victims: [1, 2, 3],
    suspects: [4, 5],
    evidenceIds: [101, 102, 103],
    result: 'In progress',
    reportedBy: '0x1a2b3c4d5e6f',
    assignedTo: '0xf1e2d3c4b5a6',
  })
  useEffect(()=>{
    async function fetchCrime(){
      const crime = await crimeRecord.getCrimeRecordDetails(searchId);
      setCrime(crime);
      console.log(Crime);
    }
    fetchCrime();
  },[searchId])
  
  return (
   
      <div className="grid grid-cols-2 gap-4 bg-opacity-80 border-2 border-gray-600 border-opacity-50 rounded-lg py-6 px-12 glassmorph2 text-gray-300">
            <div className='flex '>
                <h5 className='flex flex-col justify-center mr-2 text-gray-200 font-semibold'>Id</h5>
                <p className='w-16 h-16 rounded-full text-center flex flex-col justify-center glassmorph2'>{Crime.id.toString()}</p>
            </div>
            <div className='w-60 h-12 glassmorph2 flex flex-col justify-center rounded-md rounded-br-none'>
                <p className='text-center'><strong>Crime Type</strong> {Crime.crimeType}</p>
            </div>
            <div className=''>
                <strong>Details</strong>
                <p className='glassmorph w-2/3 h-fit p-2 mt-1'>{Crime.details.toString().slice(0,35)+"..."}</p>
            </div>

            <div className='mt-4'>
                <p className='mt-2'><strong>Location </strong> {Crime.location}</p>
                <p className='mt-2'><strong>Result </strong> {Crime.result}</p>
            </div>

            <div className=''>
                <strong>Suspects</strong>
                <div className='mt-1'>
                    {
                        Crime.suspects.map((suspect, index) => (
                            <button onClick={()=>{setIId(suspect.toString());setIsIdentityVisible(!isVisible)}} key={index} className='glassmorph bg-gray-800 w-fit h-fit px-3 py-1 mx-1'>
                              {suspect.toString()}
                            </button>
                          ))
                          
                    }

                </div>
            </div>

            <div className=''>
                <strong>Victims</strong>
                <div className='mt-1'>
                    {
                        Crime.victims.map((suspect, index) => (
                              <button onClick={()=>{setIId(suspect.toString());setIsIdentityVisible(!isVisible)}} key={index} className='glassmorph bg-gray-800 w-fit h-fit px-3 py-1 mx-1'>
                                {suspect.toString()}
                              </button>
                          ))
                          
                    }

                </div>
            </div>


            <div className=''>
                <strong>Evidences</strong>
                <div className='mt-1'>
                    {Crime.evidenceIds.map((evidence, index) => (
                      <div className='relative inline-block' key={index}>
                        <button
                          onMouseEnter={() => setHoveredEvidence(index)}
                          onMouseLeave={() => setHoveredEvidence(null)}
                          className='glassmorph bg-gray-800 w-fit h-fit px-3 py-1 mx-1'
                        >
                          {evidence.toString()}
                        </button>
                        {hoveredEvidence === index && (
                          <div className='absolute -top-1 -left-48'>
                            <EvidenceCard evidenceId = {evidence.toString()} />
                          </div>
                        )}
                      </div>
                  ))}

                </div>
            </div>

            <div>
                <div>
                <strong>Reported By</strong>
                <button className='glassmorph2 rounded-xl rounded-tl-none  w-fit px-2 py-1 ml-2'> {Crime.reportedBy.toString().slice(0,12)+"..."}</button>
                </div>
                <div className='mt-4'>
                <strong>Assigned To</strong>
                <button className='glassmorph2 rounded-xl rounded-tl-none  w-fit px-2 py-1 ml-3'> {Crime.assignedTo.toString().slice(0,10)+"..."}</button>
                </div>
            </div>  
          
      </div>
   
  );
};

export default CrimeDetails;
