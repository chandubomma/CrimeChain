import React, { useState,useContext } from 'react';
import { ContractsContext } from '../context/ContractsContext';

const IdentityForm = () => {
  const {identity}  = useContext(ContractsContext);
  const [id,setId] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    alias: '',
    age: '',
    gender: '',
    imageUrl: '',
    location: '',
    otherDetails: '',
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
    const res = await identity.createIdentity(
      formData.fullName,
      formData.alias,
      [],
      formData.age,
      formData.gender,
      formData.imageUrl,
      formData.location,
      formData.otherDetails
    )
    console.log(formData);
    identity.on('IdentityCreated',(identifier,fullName)=>{
      setId(identifier.toString());
      console.log(identifier,fullName)
    })
    setFormData(
      {
        fullName: '',
        alias: '',
        age: '',
        gender: '',
        imageUrl: '',
        location: '',
        otherDetails: '',
      }
    )
  };

  return (
    <div >
        <h2 className="text-lg font-semibold text-white mt-4 mb-2">Add Identity</h2>
      <div className="bg-opacity-80 border-2 border-gray-600 border-opacity-50 rounded-lg p-4  mx-auto glassmorph2">
        
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-x-10'>
         
          <div className="mb-2">
            <label className="text-white" htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="bg-gray-800 border-2 border-gray-600 border-opacity-50 p-2 rounded-md text-white w-full focus:outline-none glassmorph3"
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-white" htmlFor="alias">Alias</label>
            <input
              type="text"
              id="alias"
              name="alias"
              value={formData.alias}
              onChange={handleChange}
              className="bg-gray-800 border-2 border-gray-600 border-opacity-50 p-2 rounded-md text-white w-full focus:outline-none glassmorph3"
            />
          </div>
          <div className="mb-2">
            <label className="text-white" htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="bg-gray-800 border-2 border-gray-600 border-opacity-50 p-2 rounded-md text-white w-full focus:outline-none glassmorph3"
            />
          </div>
          <div className="mb-2">
            <label className="text-white" htmlFor="gender">Gender</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="bg-gray-800 border-2 border-gray-600 border-opacity-50 p-2 rounded-md text-white w-full focus:outline-none glassmorph3"
            />
          </div>
          <div className="mb-2">
            <label className="text-white" htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="bg-gray-800 border-2 border-gray-600 border-opacity-50 p-2 rounded-md text-white w-full focus:outline-none glassmorph3"
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
            />
          </div>
         
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
          <h4 className='text-green-500 font-semibold'>Added Identity with Id : {id}</h4>
        }
      </div>
    </div>
  );
};

export default IdentityForm;
