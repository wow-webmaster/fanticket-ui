import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
// guards
// import GuestGuard from '../guards/GuestGuard';
// import AuthGuard from '../guards/AuthGuard';

// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  
  return (
    <Suspense fallback={<LoadingScreen/>}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Main Routes
    // {
    //   path: '*',
    //   children: [
    //     { path: 'coming-soon', element: <ComingSoon /> },
    //     { path: 'maintenance', element: <Maintenance /> },
    //     { path: '500', element: <Page500 /> },
    //     { path: '404', element: <NotFound /> },
    //     { path: '*', element: <Navigate to="/404" replace /> },
    //   ],
    // },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <MainPage />, index: true },
        { element:<BasicProfilePage/>, path:'profile'}
      ],
    },
    // { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// IMPORT COMPONENTS

// Authentication

// Dashboard

// Main
const MainPage = Loadable(lazy(() => import('../pages/Main')));
const BasicProfilePage = Loadable(lazy(() => import('../pages/profile/BasicProfile')));
