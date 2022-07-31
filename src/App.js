import React  from 'react';
import { Routes , Route } from 'react-router-dom';
import './App.css';
import Navi from './Components/Navi/Navi';
import Home from './Components/Home/Home'
import Shop from './Components/Shop/Shop';
import Footer from './Components/Footer/Footer';
function App() {
  return (
<div>
  <Navi/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/shop' element={<Shop/>}/>
  </Routes>
  <Footer/>
</div>
  );
}

export default App;
