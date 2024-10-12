import { Container, Row, Col } from "react-bootstrap";
import { AiFillAlert } from "react-icons/ai";
import "./DefaultWidget.scss";
const DefaultWidget = () => {
  return (
    <>
      <section>
        <Container fluid>
          <Row>
            <Col xl={8}>
              <Row>
                <div className="d-flex justify-content-between">
                  <Col xl={6}>
                    <div
                      className=" rounded p-3 card_background"
                      style={{ width: "330px", height: "180px" }}
                    >
                      <div className="d-flex justify-content-between p-3">
                        <span className="icone_colur ">
                          <AiFillAlert />
                        </span>
                        <span className="icone_colur">
                          <AiFillAlert />
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="fw-bold font_size  text-white">
                          $500.00
                        </span>
                        <span className="mx-2 another_icon">
                          <AiFillAlert />
                        </span>
                      </div>
                      <div>
                        <span className="earning ">Total Earning</span>
                      </div>
                    </div>
                  </Col>

                  <Col xl={6}>
                    <div
                      className="bg-black text-white rounded"
                      style={{ width: "330px", height: "180px" }}
                    >
                      2
                    </div>
                  </Col>
                </div>
              </Row>
            </Col>

            <Col xl={4}>
              <div className="bg-info ">3</div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DefaultWidget;
