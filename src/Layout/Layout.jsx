import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Col, Container, Row } from "react-bootstrap";

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Container fluid className="h-full">
        <Row>
          <Col xl={isCollapsed ? 1 : 2} className="p-0">
            <Sidebar isCollapsed={isCollapsed} />
          </Col>
          <Col xl={isCollapsed ? 11 : 10} className="mt-5 p-5">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
