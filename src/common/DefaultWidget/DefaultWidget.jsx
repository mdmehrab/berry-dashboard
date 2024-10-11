import { Card } from "react-bootstrap";
import { FaAd } from "react-icons/fa";
import "./defaultWidget.scss";

const DefaultWidget = () => {
  return (
    <>
      <Card
        style={{
          background: "#39A9A5",
          height: "180px",
          margin: "0 .5rem",
        }}
      >
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div className="icon">
              <FaAd className="text-white" />
            </div>
            <FaAd />
            {/* <span>Month</span>
            <span>year</span> */}
          </div>
          <div className="d-flex mt-3">
            <Card.Title className="text-white display-6 mainTitle">
              $500.00
            </Card.Title>
            <span className="mx-3 text-info">
              <FaAd />
            </span>
          </div>
          <Card.Text className="text-capitalize">Total Earning</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default DefaultWidget;
