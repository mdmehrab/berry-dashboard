import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Col, Container, Row } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <Header />
      <Container fluid className="h-full">
        <Row>
          <Col xl={2} className="bg-danger">
            <Sidebar />
          </Col>

          <Col xl={10} className="bg-info">
            <Outlet />
          </Col>
        </Row>
        <div className="d-flex">
          <div></div>
        </div>
      </Container>
    </>
  );
};

export default Layout;
