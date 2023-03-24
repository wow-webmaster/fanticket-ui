import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import MainLayout from "../layouts/main";
// guards
// import GuestGuard from '../guards/GuestGuard';
// import AuthGuard from '../guards/AuthGuard';

// components
import LoadingScreen from "../components/LoadingScreen";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
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
      path: "/",
      element: <MainLayout />,
      children: [
        { element: <MainPage />, index: true },
        { element: <BasicProfilePage />, path: "profile" },
        { element: <NotificationPage />, path: "profile/notifications" },
        
      ],
    },
    {
      path: "/event",
      element: <MainLayout />,
      children: [
        { element: <AddEventPage />, path: "add" },
      ],
    },
    {
      path: "/ticket",
      element: <MainLayout />,
      children: [
        { element: <AddTicketPage />, path: "sell/add" },
      ],
    },
    // { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// IMPORT COMPONENTS

// Authentication

// Dashboard

// Main
const MainPage = Loadable(lazy(() => import("../pages/Main")));

// PROFILE
const BasicProfilePage = Loadable(
  lazy(() => import("../pages/profile/BasicProfile"))
);
const NotificationPage = Loadable(
  lazy(() => import("../pages/profile/Notifications"))
);
//EVENT
const AddEventPage = Loadable(lazy(() => import("../pages/events/AddEvent")));

// TICKET
const AddTicketPage = Loadable(lazy(() => import("../pages/ticket/AddTicket")));
