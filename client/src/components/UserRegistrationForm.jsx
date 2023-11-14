import React, { useState,useContext } from 'react';
import { ContractsContext } from '../context/ContractsContext';

const UserRegistrationForm = () => {
  const {user}  = useContext(ContractsContext);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    imageUrl: '',
    department: '',
    walletAddress: '',
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
    await user.createUser(
      formData.fullName,
      formData.age,
      formData.gender,
      formData.imageUrl,
      formData.department,
      formData.walletAddress
    )
    user.on('UserCreated',(sender,fullName)=>{

    })
    console.log(formData);
    setFormData(
      {
        fullName: '',
        age: '',
        gender: '',
        imageUrl: '',
        department: '',
        walletAddress: '',
      }
    )
  };

  return (
    <div>
    <h2 className="text-lg font-semibold text-white mt-4 mb-2">User Registration</h2>
      <div className="bg-opacity-80 border-2 border-gray-600 border-opacity-50 rounded-lg p-4 w-[36rem] mx-auto glassmorph2">
        
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-10">
          
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
            <label className="text-white" htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="bg-gray-800 border-2 border-gray-600 border-opacity-50 p-2 rounded-md text-white w-full focus:outline-none glassmorph3"
              required
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
              required
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
            <label className="text-white" htmlFor="department">Department</label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="bg-gray-800 border-2 border-gray-600 border-opacity-50 p-2 rounded-md text-white w-full focus:outline-none glassmorph3"
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-white" htmlFor="walletAddress">Wallet Address</label>
            <input
              type="text"
              id="walletAddress"
              name="walletAddress"
              value={formData.walletAddress}
              onChange={handleChange}
              className="bg-gray-800 border-2 border-gray-600 border-opacity-50 p-2 rounded-md text-white w-full focus:outline-none glassmorph3"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-black hover:bg-black text-white px-4 py-2 rounded-md h-fit mt-6"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistrationForm;
