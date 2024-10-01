import Login from "./components/Login/LogIn";

export const routes = [
  { path: "/", element: <Login /> },
  { path: "/register", element: <div>register</div> },
  { path: "/dashboard", element: <div>Dashboard</div> },
];
