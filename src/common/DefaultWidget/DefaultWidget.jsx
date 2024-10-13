import { Card } from "react-bootstrap";
import "./defaultWidget.scss";

const DefaultWidget = ({
  primaryIcon,
  secondaryIcon,
  primaryLabel,
  secondaryLabel,
  mainTitle,
  subTitle,
  middleIcon,
  backgroundColor = "#39A9A5",
}) => {
  return (
    <>
      <Card
        style={{
          background: backgroundColor,
          height: "180px",
          margin: "0 .7rem",
        }}
      >
        <Card.Body>
          <div className="d-flex justify-content-end">
            {primaryLabel && (
              <span style={{ color: "#FFD700", marginRight: "1rem" }}>
                {primaryLabel}
              </span>
            )}
            {secondaryLabel && (
              <span style={{ color: "#FFF" }}>{secondaryLabel}</span>
            )}
          </div>

          <div className="d-flex justify-content-between">
            <div className="icon">{primaryIcon}</div>
            {secondaryIcon}
          </div>

          <div className="d-flex mt-3">
            <Card.Title className="text-white mainTitle">
              {mainTitle}
            </Card.Title>
            <span className="mx-3 text-info">{middleIcon}</span>
          </div>
          <Card.Text className="text-capitalize">{subTitle}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default DefaultWidget;
