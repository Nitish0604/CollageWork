
import './App.css';

import Signup from './pages/Signup';
import Login from './pages/Authan/Login';
import Verify from './pages/Authan/Verify';
import NewPassword from './pages/Authan/NewPassword';
import Dashboard from './pages/Dashboard';

import Register from './pages/Authan/Register';

import {  Route, Routes} from 'react-router-dom';
import Outlets from './pages/Outlets';
import Challenge from './pages/Challenge';
import Leaderboard from './pages/Leaderboard';
import Wallet from './pages/Wallet';
import Setting from './pages/Setting';
import LandingPage from './pages/LandingPage';

export const baseUrl = "https://dolphin-app-fmayj.ondigitalocean.app";
function App() {
  return (
    <div className="App">
     
      <Routes>
      <Route path="/landingpage" element={<LandingPage />} />
       
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path="/verify" element={<Verify />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/register" element={<Register />} />
       
        {/* <Route path='/' element={<Signup/>}></Route> */}
        <Route path="/" element={<Outlets />}>
          <Route index element={<Dashboard />} />
          <Route path='/challenge' element={<Challenge/>}/>
          <Route path='/leaderboard' element={<Leaderboard/>}/>
          <Route path='/wallet' element={<Wallet/>}/>
          <Route path='/setting' element={<Setting/>}/>
          
          
          
        </Route>
       
      </Routes>
    </div>
  );
}

export default App;
