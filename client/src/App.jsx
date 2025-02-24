import React from 'react';
import { Button } from "./components/ui/button";
import Navbar from './components/components_lite/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/authentication/Login.jsx';
import Register from './components/authentication/Register.jsx';
import Home from './components/components_lite/Home.jsx';
import Jobs from './components/components_lite/Jobs.jsx';
import Browse from './components/components_lite/Browse.jsx';
import Profile from './components/components_lite/Profile.jsx';
import Description from './components/components_lite/Description.jsx';

const appRoute = createBrowserRouter([
  {
    path:"/",element:<Home/>
  },
  {
    path:"/login",element:<Login/>
  },
  {
    path:"/register", element:<Register/>
  },
  {
    path:"/jobs",element:<Jobs/>
  },
  {
    path:"/home", element:<Home/>
  },
  {
    path:"/browse",element:<Browse/>
  },
  {
    path:"/profile",element:<Profile/>
  },
  {
    path:"/description/:id",element:<Description/>
  }
]);


function App() {
  return (
    <div>
      <RouterProvider router={appRoute}></RouterProvider> 
      
    </div>
  )
}

export default App;
