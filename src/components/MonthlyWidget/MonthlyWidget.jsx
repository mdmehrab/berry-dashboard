import { Row, Col } from "react-bootstrap";

import "./monthlyWidget.scss";

const MonthlyWidget = () => {
  return (
    <Row>
      <Col xl="6">revenu</Col>
      <Col xl="6">total oder</Col>
    </Row>
  );
};

export default MonthlyWidget;
