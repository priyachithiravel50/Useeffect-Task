import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component.js/Login';
import Register from './Component.js/Register';
import DisplayForm from './Component.js/displayform';
import Display from './Component.js/display';
import RegisterForm from './Context Hooks/RegisterForm';
import Country from './Context Hooks/Country';
import State from './Context Hooks/State';

// import 'primereact/resources/primereact.min.css'; // Core styles
// import 'primeicons/primeicons.css'; // Icons
// import 'primeflex/primeflex.css'; // Flex utility (optional)


function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/displayform' element={<DisplayForm/>}/>
        <Route path='/display' element={<Display/>}/>
        <Route path='/state' element={<State/>}/>
        <Route path='/Country' element={<Country/>}/>
        <Route path='/registerform' element={<RegisterForm/>}/>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
