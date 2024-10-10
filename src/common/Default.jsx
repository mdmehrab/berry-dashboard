import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function DefaultWidget({ imgSrc, title, desc, btnText }) {
  return (
    <Card style={{ width: "25rem" }}>
      <Card.Img
        variant="top"
        src={imgSrc}
        style={{
          height: "300px",
          objectFit: "cover",
        }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary">{btnText}</Button>
      </Card.Body>
    </Card>
  );
}

export default DefaultWidget;
