import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from '../LayOut/Main';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "signUp",
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;