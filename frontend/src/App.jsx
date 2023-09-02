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



function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>

    <Routes>


      <Route element={ <Home/>} path='/'/>
      <Route element={ <SignUp/>} path='signup'/>
      <Route element={ <Login/>} path='login'/>
      <Route element={ <Home/>} path='home'/>
      <Route element={ <ProjectAdd/>} path='projectadd'/>
      <Route element={ <BrowseProject/>} path='browseproject'/>
      <Route element={ <ViewProject/>} path='viewproject/:id'/>
  
      


    </Routes>


    </BrowserRouter>
   </div>
  );
}

export default App;
