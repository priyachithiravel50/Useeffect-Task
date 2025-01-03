import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component.js/Login';
import Register from './Component.js/Register';
import DisplayForm from './Component.js/displayform';
import Display from './Component.js/display';

function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/displayform' element={<DisplayForm/>}/>
        <Route path='/display' element={<Display/>}/>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
