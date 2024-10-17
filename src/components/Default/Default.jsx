import { Container, Col, Row } from "react-bootstrap";
import {
  DefaultWidget,
  IncomeWidjet,
  StackedBarChart,
  PopularStock,
} from "../index";

import { FaAd } from "react-icons/fa";
import { DiAndroid, DiApple } from "react-icons/di";
import "./default.scss";

const Default = () => {
  return (
    <>
      <section id="default" className="p-5 mt-3">
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
                    mainTitle={"$961"}
                    subTitle={`Total Order`}
                    middleIcon={<FaAd />}
                    primaryLabel={"Month"}
                    secondaryLabel={"Year"}
                    backgroundColor={"#14383D"}
                  />
                </Col>
              </Row>

              <div>
                <StackedBarChart />
              </div>
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

              <div>
                <PopularStock />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Default;
