import { Container, Col, Row } from "react-bootstrap";
import DefaultWidget from "../../common/DefaultWidget/DefaultWidget";
import "./default.scss";
import { FaAd } from "react-icons/fa";

const Default = () => {
  return (
    <>
      <section id="default">
        <Container>
          <Row>
            <Col xl={8}>
              <Row>
                <Col xl={6}>
                  <DefaultWidget
                    primaryIcon={<FaAd />}
                    secondaryIcon={<FaAd />}
                    mainTitle={"$500.00"}
                    subTitle={`Total Earning`}
                    middleIcon={<FaAd />}
                  />
                </Col>
                <Col xl={6}>
                  <DefaultWidget
                    primaryIcon={<FaAd />}
                    mainTitle={"$600.00"}
                    subTitle={`Total Order`}
                    middleIcon={<FaAd />}
                    primaryLabel={"Month"}
                    secondaryLabel={"Year"}
                    backgroundColor={"#14383D"}
                  />
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
