import Login from "./components/Login/LogIn";
import Register from "./components/Register/Register";
import Dashboard from "./pages/Dashboard";

export const routes = [
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/dashboard", element: <Dashboard /> },
];
