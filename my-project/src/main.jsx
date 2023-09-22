import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './root/Root';
import Home from './Home/home';
import Job from './job/job';
import AppliedJobs from './AppliedJobs/AppliedJobs';
import Statistics from './Statistics/Statistics';
import Blog from './Blog/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>, 
      },
      {
        path: "/jobs",
        element: <Job></Job>, 
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>, 
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>, 
      },
      {
        path: "/blogs",
        element: <Blog></Blog>, 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
