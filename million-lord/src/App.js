import React from 'react';
import Navbar from './Navbar';
// import logo from './AcePlaysz.png';
import './App.css';
import AttackPowerCalculator from './AttackPowerCalculator';
// import TroopProductionCalculator from './TroopProductionCalculator';

function App() {
  return (
  <div className='h-screen bg-gradient-to-r from-gray-900 via-blue-800 to-black'>
  


<div className='h-[8%] bg-gray-800/60 text-white w-full shadow-2xl '>
  <Navbar/>
</div>
<div className='h-[92%] bg-gray-800/60 text-white w-full shadow-2xl flex items-center'>
 {/* <TroopProductionCalculator/> */}
 <AttackPowerCalculator/>
</div>
  </div>
  );
}


export default App;
