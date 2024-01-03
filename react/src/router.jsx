import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./Auth/Login";
import App from "./App";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Keuangan from "./components/Keuangan";
import Rekapitulasi from "./components/Rekapitulasi";
import Validasi from "./components/Validasi";
import Profile from "./components/Profile";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Navigate to='/dashboard' />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'keuangan',
        element: <Keuangan />
      },
      {
        path: 'rekapitulasi',
        element: <Rekapitulasi />
      },
      {
        path: 'validasi',
        element: <Validasi />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },


])

export default router;
