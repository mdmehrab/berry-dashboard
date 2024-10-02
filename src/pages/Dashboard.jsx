import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Row for earnings and orders */}
      <Row className="mb-4">
        <Col md={6}>
          <Card className="p-3 text-center">
            <h3>$500.00</h3>
            <p>Total Earnings</p>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-3 text-center">
            <h3>$961</h3>
            <p>Total Orders</p>
          </Card>
        </Col>
      </Row>

      {/* Row for total growth and popular stocks */}
      <Row className="mb-4">
        <Col md={8}>
          <Card className="p-3">
            <h4>Total Growth</h4>
            {/* Placeholder for chart (use a chart library like Chart.js or Recharts) */}
            <div
              className="chart-placeholder"
              style={{ height: "300px", backgroundColor: "#f0f2f5" }}
            >
              <p>Chart Placeholder</p>
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <h4>Popular Stocks</h4>
            <div>
              <p>Bajaj Finery: $1839.00 (10% Profit)</p>
              <p>TTML: $100.00 (10% Loss)</p>
              <p>Reliance: $200.00 (10% Profit)</p>
              {/* Add more stock info as necessary */}
            </div>
          </Card>
        </Col>
      </Row>

      {/* Additional rows for other dashboard sections */}
    </div>
  );
};

export default Dashboard;
