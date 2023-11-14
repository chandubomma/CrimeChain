import React from 'react'

const IdentityCard = ({isVisible,Identity}) => {
   
  return (
    <div className='w-full h-full'>
        <div
        className={`${
          isVisible ? 'block' : 'hidden'
        } transition-all duration-500 ease-in-out bg-gray-200 p-4 rounded-lg mt-4 glassmorph w-full h-full flex`}
      >
        <div className='w-1/2 text-center text-gray-200 font-bold pt-5'>
            <p className=''>Name : {Identity.fullName}</p>
            <p className=''>Alias : {Identity.Alias}</p>
            <p className=''>Gender : {Identity.gender}</p>
            <p className=''>Age : {Identity.age.toString()}</p>
            <p className=''>Location : {Identity.location}</p>
            
        </div>
        <div className='flex justify-center w-1/2'>
            <img
                src={Identity.image}
                alt="User Photo"
                className="w-36 h-48 mt-1 object-cover rounded-lg  border-2 border-gray-600 border-opacity-50 mr-4"
            />
        </div>
      </div>
    </div>
  )
}

export default IdentityCard
