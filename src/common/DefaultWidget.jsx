import { Button, Card } from "react-bootstrap";
import { FaAd } from "react-icons/fa";

const DefaultWidget = () => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <FaAd />
            <FaAd />
            <span>Month</span>
            <span>year</span>
          </div>
          <Card.Title>
            $500.00
            <span>
              <FaAd />
            </span>
          </Card.Title>
          <Card.Text>Total Earning</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default DefaultWidget;
