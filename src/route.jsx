import Layout from "./Layout/Layout";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./pages/Dashboard";

export const routes = [
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [{ path: "", element: <Dashboard /> }],
  },
];
