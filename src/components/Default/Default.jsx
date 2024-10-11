import { Container, Col, Row } from "react-bootstrap";
import DefaultWidget from "../../common/DefaultWidget";

const Default = () => {
  return (
    <>
      <section id="default">
        <Container>
          <Row>
            <Col xl={8}>
              <Row>
                <Col xl={6}>
                  <DefaultWidget />
                </Col>
                <Col xl={6}>
                  <DefaultWidget />
                </Col>
              </Row>
            </Col>
            <Col xl={4}>col 1</Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Default;
