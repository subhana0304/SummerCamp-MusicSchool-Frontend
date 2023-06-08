import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from '../LayOut/Main';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Dashboard from '../LayOut/DashBoard/Dashboard';
import PrivateRoute from './PrivateRoute';
import Instructors from '../Pages/Home/Instructors';
import Classes from '../Pages/Classes/Classes';
import InstructorPages from '../Pages/Instructors/InstructorPages';

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
          path: "/signUp",
          element: <SignUp></SignUp>
        },
        {
          path: "/instructors",
          element: <InstructorPages></InstructorPages>
        },
        {
          path: "/classes",
          element:<Classes></Classes>
        }
      ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;