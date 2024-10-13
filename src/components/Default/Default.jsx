import { Container, Col, Row } from "react-bootstrap";
import DefaultWidget from "../../common/DefaultWidget/DefaultWidget";
import "./default.scss";
import { FaAd } from "react-icons/fa";
import IncomeWidjet from "../../common/IncomeWidget/IncomeWidjet";
import { DiAndroid } from "react-icons/di";
import { DiApple } from "react-icons/di";
import StackedBarChart from "../Chart/Chart";

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
                    mainTitle={"$961"}
                    subTitle={`Total Order`}
                    middleIcon={<FaAd />}
                    primaryLabel={"Month"}
                    secondaryLabel={"Year"}
                    backgroundColor={"#14383D"}
                  />
                </Col>
              </Row>

              <StackedBarChart />
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
