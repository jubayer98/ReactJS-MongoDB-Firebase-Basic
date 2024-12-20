import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './components/layout/MainLayout';
import PageTitle from './components/navbar/PageTitle';
import Home from './components/pages/Home';
import AllVisa from './components/pages/AllVisa';
import AddVisa from './components/pages/AddVisa';
import MyAddedVisa from './components/pages/MyAddedVisa';
import MyVisaApplication from './components/pages/MyVisaApplication';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import MyUpdateVisa from './components/MyUpdateVisa/MyUpdateVisa';
import VisaDetails from './components/AllVisas/VisaDetails';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element:
          <PageTitle title='Home'>
            <Home></Home>
          </PageTitle>,
        loader: () => fetch('https://visa-navigator-server-sooty.vercel.app/visa')
      },
      {
        path: "/all-visa",
        element:
          <PageTitle title='All Visa'>
            <AllVisa></AllVisa>
          </PageTitle>,
        loader: () => fetch('https://visa-navigator-server-sooty.vercel.app/visa')
      },
      {
        path: "/all-visa/visa-details/:id",
        element:
          <PageTitle title='Visa Details'>
            <PrivateRoute>
              <VisaDetails></VisaDetails>
            </PrivateRoute>
          </PageTitle>,
        loader: async ({ params }) => {
          const res = await fetch("https://visa-navigator-server-sooty.vercel.app/visa")
          const data = await res.json()
          //console.log(data)
          const singleData = data.find(d => d._id === params.id)
          //console.log(singleData)
          return singleData
        }
      },
      {
        path: "/add-visa",
        element:
          <PageTitle title='Add Visa'>
            <AddVisa></AddVisa>
          </PageTitle>
      },
      {
        path: "/my-added-visa",
        element:
          <PageTitle title='My Added Visa'>
            <PrivateRoute>
              <MyAddedVisa></MyAddedVisa>
            </PrivateRoute>
          </PageTitle>,
        loader: () => fetch('https://visa-navigator-server-sooty.vercel.app/visa')
      },
      {
        path: "/my-update-visa/:id",
        element:
          <PageTitle title='My Added Visa'>
            <MyUpdateVisa></MyUpdateVisa>
          </PageTitle>,
        loader: ({ params }) => fetch(`https://visa-navigator-server-sooty.vercel.app/visa/${params.id}`)
      },
      {
        path: "/my-visa-application",
        element:
          <PageTitle title='My Visa Application'>
            <PrivateRoute>
              <MyVisaApplication></MyVisaApplication>
            </PrivateRoute>
          </PageTitle>,
        loader: () => fetch('https://visa-navigator-server-sooty.vercel.app/application')
      },
      {
        path: "/login",
        element:
          <PageTitle title='Login'>
            <Login></Login>
          </PageTitle>
      },
      {
        path: "/register",
        element:
          <PageTitle title='Register'>
            <Register></Register>
          </PageTitle>
      },
      {
        path: "*",
        element:
          <PageTitle title='Error'>
            <NotFound></NotFound>
          </PageTitle>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider routes={<RouterProvider router={router}></RouterProvider>}></AuthProvider>
  </StrictMode>,
)
