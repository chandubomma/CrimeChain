import './App.css'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import Layout from './components/Layout'
import ReportCrime from './components/ReportCrime'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IdentityForm from './components/IdentityForm'
import UserRegistrationForm from './components/UserRegistrationForm'
import AddEvidenceForm from './components/AddEvidenceForm'


function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/user" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Home />} />
            <Route path="reportcrime" element={<ReportCrime />} />
            <Route path="addidentity" element={<IdentityForm/>} />
            <Route path="adduser" element={<UserRegistrationForm/>} />
            <Route path="addevidence" element={<AddEvidenceForm/>} />
           
          </Route>
        </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
