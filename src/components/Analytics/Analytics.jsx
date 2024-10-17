import { Container, Row, Col } from "react-bootstrap";
import {
  Accounts,
  LatestCustomers,
  MarketShare,
  MonthlyWidget,
  OverViewCards,
  TotalRevenue,
} from "..";

function Analytics() {
  return (
    <>
      <section className="p-5" id="analytics">
        <Container>
          <Row>
            <Col xl="8">
              <MarketShare />
              <MonthlyWidget />
              <LatestCustomers />
            </Col>
            <Col xl="4">
              <Accounts />
              <TotalRevenue />
              <OverViewCards />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Analytics;
