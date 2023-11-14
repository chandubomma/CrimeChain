import React, { useEffect } from 'react'
import Logo from './Logo'
import ControlPanel from './ControlPanel'
import SearchBar from './SearchBar'
import CrimeDetails from './CrimeDetails'
import IdentityCard from './IdentityCard'
import { useState ,useContext} from 'react'
import { ContractsContext } from '../context/ContractsContext'

const Home = () => {
    const [isIdentityVisible,setIsIdentityVisible] = useState(false);
    const [iid,setIId] = useState(1);
    const [Identity,setIdentity] = useState({
      fullName : "Suriya",
      Alias : "Rolex Sir",
      age : "47",
      gender : "male",
      location : 'Chennai',
      image : "https://w0.peakpx.com/wallpaper/219/556/HD-wallpaper-rolex-surya-twitter-vikram-rolex.jpg"
    });
    const {identity} = useContext(ContractsContext);
    const toggleIdentityVisibility = () => {
        setIsIdentityVisible(!isIdentityVisible);
      };
  useEffect(()=>{
    async function fetchIdentity(){
      const temp = await identity.getIdentity(iid);
      console.log(temp);
      setIdentity(temp);
    }
    fetchIdentity();
  },[iid])
  return (
    <div>
      {/* <div className='fixed top-4 left-4'>
        <Logo/>
      </div>
      <div className='fixed top-20 left-[40rem]'>
        <h2 className='text-gray-200 text-xl font-bold '>Welcome! Chandu Bomma</h2>
      </div>
     
        <div className='fixed left-16 top-1/3'>
            <ControlPanel/>
        </div>
        <div className='fixed left-[36rem] top-36'>
            <SearchBar/>
        </div> */}
        <div className='w-[40rem] h-fit fixed top-64 left-[36rem]'>
            <h2 className="text-xl mb-3 text-gray-200 font-bold">Crime Details</h2>
            <CrimeDetails setIsIdentityVisible={setIsIdentityVisible} isVisible={isIdentityVisible} setIId={setIId}/>
        </div>
        <div className='w-96 h-60 fixed top-52 right-40'>
            <IdentityCard isVisible={isIdentityVisible} Identity={Identity}/>
        </div>
      </div>
  )
}

export default Home
