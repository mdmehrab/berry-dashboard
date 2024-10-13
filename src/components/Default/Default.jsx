import DefaultWidget from "../../common/DefaultWidget/DefaultWidget";
import "./default.scss";
import { FaAd } from "react-icons/fa";
import IncomeWidjet from "../../common/IncomeWidget/IncomeWidjet";
import { DiAndroid } from "react-icons/di";
import { DiApple } from "react-icons/di";

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
              <div className="income_margen">
                <IncomeWidjet
                  icone={<DiAndroid />}
                  iconColor={"#FF0000"}
                  bgColor="#000"
                  prize={"$203k"}
                  totalIncome={"Total income"}
                />
              </div>
              <div className="income_margen">
                <IncomeWidjet
                  icone={<DiApple />}
                  iconColor={"#fff"}
                  bgColor="#FF0000"
                  prize={"$210k"}
                  totalIncome={"Total income"}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Default;
