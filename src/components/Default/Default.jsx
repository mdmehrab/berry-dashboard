import DefaultWidget from "../../common/DefaultWidget/DefaultWidget";

const Default = () => {
  return (
    <>
      <section>
        <Container fluid>
          <Row>
            <Col xl={8}>
              <Row>
                <div>
                  <Col xl={6}>
                    <div>
                      <div>
                        <span>
                          <AiFillAlert />
                        </span>
                        <span>
                          <AiFillAlert />
                        </span>
                      </div>
                      <div>
                        <span></span>
                        <span>
                          <AiFillAlert />
                        </span>
                      </div>
                      <div>
                        <span></span>
                      </div>
                    </div>
                  </Col>

                  <Col xl={6}>
                    <div></div>
                  </Col>
                </div>
              </Row>
            </Col>

            <Col xl={4}>
              <div>3</div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Default;
