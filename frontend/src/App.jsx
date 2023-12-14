import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { ProjectAdd } from './components/ProjectAdd';
import { BrowseProject } from './components/BrowseProject';
import { ViewProject } from './components/ViewProject';
import { Toaster } from 'react-hot-toast';
import Home2 from './components/Home2';



function App() {
  return (
   <div>
    <BrowserRouter>
    <Toaster position='top right' />
    <Navbar/>

    <Routes>


      <Route element={ <Home/>} path='/'/>
      <Route element={ <SignUp/>} path='signup'/>
      <Route element={ <Login/>} path='login'/>
      <Route element={ <Home/>} path='home'/>
      <Route element={ <ProjectAdd/>} path='projectadd'/>
      <Route element={ <BrowseProject/>} path='browseproject'/>
      <Route element={ <ViewProject/>} path='viewproject/:id'/>
      <Route element={ <Home2/>} path='home2'/>
  
      


    </Routes>


    </BrowserRouter>
   </div>
  );
}

export default App;
