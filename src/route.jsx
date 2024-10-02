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
    children: [
      { path: "", element: <Dashboard /> },
      { path: "default", element: <div>hey</div> },
      {
        path: "analytics",
        element: <div>analytics</div>,
      },
      {
        path: "a",
        element: <div>aaaaaaaaaaaaaaaaa</div>,
      },
      {
        path: "b",
        element: <div>bbbbbbbbbbbbbbbbbbb</div>,
      },
      {
        path: "c",
        element: <div>cccccccccccccccccc</div>,
      },
      {
        path: "d",
        element: <div>ddddddddddddddddddd</div>,
      },
    ],
  },
];
