import React,{useContext} from 'react';
import { ContractsContext } from '../context/ContractsContext';

const SearchBar = () => {
  const {searchId,setSearchId} = useContext(ContractsContext);
  return (
    
      <div className="bg-opacity-90 bg-gray-800 rounded-lg rounded-br-none  p-4 w-96 flex items-center space-x-4 border-3 border-gray-300 glassmorph2">
        <input
          type="text"
          className="bg-transparent text-white focus:outline-none w-full"
          placeholder="Search..."
          onChange={(e)=>setSearchId(e.target.value)}
        />
      </div>
   
  );
};

export default SearchBar;
