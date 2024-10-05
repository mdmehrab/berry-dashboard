import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Layout = () => {
  return (
    <div>
      <Header />

      <div className="d-flex">
        <Sidebar />

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
