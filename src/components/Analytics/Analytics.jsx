import { Container, Row, Col } from "react-bootstrap";
import { MarketShare, MonthlyWidget } from "../index";

function Analytics() {
  return (
    <>
      <section id="analytics">
        <Container>
          <Row>
            <Col xl={8} className="p-5">
              <MarketShare />
              <MonthlyWidget />
            </Col>
            <Col xl={4} className="p-5 bg-danger">
              right
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Analytics;
