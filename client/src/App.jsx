import React from 'react';
import { Button } from "./components/ui/button";
import Navbar from './components/components_lite/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Home from './components/components_lite/Home';
import Jobs from './components/components_lite/Jobs';

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
]);


function App() {
  return (
    <div>
      <RouterProvider router={appRoute}></RouterProvider> 
      
    </div>
  )
}

export default App;
