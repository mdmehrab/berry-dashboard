import DefaultView from "../components/DefaultView/DefaultView";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="p-5 bg-secondary">
          <DefaultView />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
