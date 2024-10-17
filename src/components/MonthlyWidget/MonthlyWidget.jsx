import { Col, Row } from "react-bootstrap";
import "./monthlyWidget.scss";

export default function MonthlyWidget() {
  return (
    <>
      <div>
        <Row>
          <Col xl={6}>Revenue</Col>
          <Col xl={6}>Orders Received</Col>
        </Row>
      </div>
    </>
  );
}
