import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
import { Home } from './components/Home';
import ManageProject from './components/ManageProject';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>

    <Routes>


      <Route element={ <SignUp/>} path='signup'/>
      <Route element={ <Login/>} path='login'/>
      <Route element={ <Home/>} path='home'/>
      <Route element={ <ManageProject/>} path='manageproject'/>


    </Routes>


    </BrowserRouter>
   </div>
  );
}

export default App;
