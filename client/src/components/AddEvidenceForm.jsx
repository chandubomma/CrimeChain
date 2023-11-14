import React, { useState,useContext } from 'react';
import { ContractsContext } from '../context/ContractsContext';

const AddEvidenceForm = () => {
  const {evidence,currentAccount}  = useContext(ContractsContext);
  const [id,setId] = useState(null);

  const [formData, setFormData] = useState({
    description: '',
    location: '',
    collectedBy: currentAccount,
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
    const res = await evidence.createEvidence(formData.description,formData.location);
    console.log(res);
    evidence.on('EvidenceCreated',(tokenid)=>{
      console.log(tokenid)
      setId(tokenid.toString());
    })
    setFormData({
      description: '',
      location: '',
      collectedBy: currentAccount,
    })
  };

  return (
    <div >
        <h2 className="text-lg font-semibold text-white mt-4 mb-2">Add Evidence</h2>
      <div className="bg-opacity-80 border-2 border-gray-600 border-opacity-50 rounded-lg p-4  mx-auto glassmorph2">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-10">
          <div className="mb-2 col-span-2">
            <label className="text-white" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="bg-gray-800 border-2 border-gray-600 border-opacity-50 p-2 rounded-md text-white w-full focus:outline-none glassmorph3"
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
            <label className="text-white" htmlFor="collectedBy">Collected By</label>
            <input
              type="text"
              id="collectedBy"
              name="collectedBy"
              value={formData.collectedBy}
              onChange={handleChange}
              className="bg-gray-800 border-2 border-gray-600 border-opacity-50 p-2 rounded-md text-white w-full focus:outline-none glassmorph3"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-black hover:bg-black text-white px-4 py-2 rounded-md h-fit mt-6 col-span-2"
          >
            Add Evidence
          </button>
        </form>
      </div>
      <div className='mt-8 ml-2'>
        {
          id!=null &&
          <h4 className='text-green-500 font-semibold'>Added Evidence with Id : {id}</h4>
        }
      </div>
    </div>
  );
};

export default AddEvidenceForm;
