import React, { useState,useContext } from 'react';
import { ContractsContext } from '../context/ContractsContext';

const ReportCrime = () => {
  const {crimeRecord} = useContext(ContractsContext);
  const [id,setId] = useState(null);
  const [formData, setFormData] = useState({
    crimeType: '',
    details: '',
    location: '',
    victims: [],
    suspects: [],
    evidenceIds: [],
    result: 'pending',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await crimeRecord.createCrimeRecord(
      formData.crimeType,
      formData.details,
      formData.location,
      formData.victims.split(','),
      formData.suspects.split(','),
      formData.evidenceIds.split(','),
      formData.result
    )
    crimeRecord.on('CrimeRecordCreated',(crimeId)=>{
      setId(crimeId.toString());
    })
    console.log(formData);
    setFormData(
      {
        crimeType: '',
        details: '',
        location: '',
        victims: [],
        suspects: [],
        evidenceIds: [],
        result: 'pending',
      }
    )
  };

  return (
   
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Report a Crime</h2>
        <div className="bg-opacity-80 border-2 border-gray-600 border-opacity-50 rounded-lg py-4 px-8  mx-auto glassmorph2">
        
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-x-10'>
          <div className="mb-2">
            <label className="text-white" htmlFor="crimeType">Crime Type</label>
            <input
              type="text"
              id="crimeType"
              name="crimeType"
              value={formData.crimeType}
              onChange={handleChange}
              className="bg-gray-800 border-2 border-gray-600 border-opacity-50 p-2 rounded-md text-white w-full focus:outline-none glassmorph3"
              required
            />
          </div>
          <div className="mb-2 row-span-2 ">
            <label className="text-white" htmlFor="details">Details</label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows="4"
              className="bg-gray-800 border-2 border-gray-600 border-opacity-50 p-2 rounded-md text-white w-full focus:outline-none glassmorph3 "
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-white" htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="bg-gray-800 border-2 border-gray-600 border-opacity-50 p-2 rounded-md text-white w-full focus:outline-none glassmorph3"
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-white" htmlFor="suspects">Suspect Ids</label>
            <input
              type="text"
              id="suspects"
              name="suspects"
              value={formData.suspects}
              onChange={handleChange}
              className="bg-gray-800 border-2 border-gray-600 border-opacity-50 p-2 rounded-md text-white w-full focus:outline-none glassmorph3"
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-white" htmlFor="victims">Victim Ids</label>
            <input
              type="text"
              id="victims"
              name="victims"
              value={formData.victims}
              onChange={handleChange}
              className="bg-gray-800 border-2 border-gray-600 border-opacity-50 p-2 rounded-md text-white w-full focus:outline-none glassmorph3"
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-white" htmlFor="location">Evidence Ids</label>
            <input
              type="text"
              id="evidences"
              name="evidenceIds"
              value={formData.evidenceIds}
              onChange={handleChange}
              className="bg-gray-800 border-2 border-gray-600 border-opacity-50 p-2 rounded-md text-white w-full focus:outline-none glassmorph3"
              required
            />
          </div>
          {/* Add more form fields for victims, suspects, evidence, and result as needed */}
          <button
            type="submit"
            className="bg-black hover:bg-black text-white px-4 py-2 rounded-md h-fit mt-6"
          >
            Submit
          </button>
        </form>
      </div>
      <div className='mt-8 ml-2'>
        {
          id!=null &&
          <h4 className='text-green-500 font-semibold'>Added Crime Record with Id : {id}</h4>
        }
      </div>
      </div>
  );
};

export default ReportCrime;

