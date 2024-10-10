import Layout from "./Layout/Layout";
import Analytics from "./components/Analytics/Analytics";
import { Chart } from "./components/Chart/Chart";
import Data from "./components/Data/Data";
import Default from "./components/Default/Default";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Statistics from "./components/Statistics/Statistics";
import Dashboard from "./pages/Dashboard";

export const routes = [
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "default", element: <Default /> },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },

      {
        path: "data",
        element: <Data />,
      },
      {
        path: "chart",
        element: <Chart />,
      },
    ],
  },
];
