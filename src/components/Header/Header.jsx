import logo from "../../assets/svg/logo.svg";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import profile from "../../assets/images/berry.jpg";
import { IoLanguageSharp } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbAccessPoint } from "react-icons/tb";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { Row, Col, InputGroup } from "react-bootstrap";
import "./header.scss";

function Header() {
  return (
    <>
      <Container fluid className="header-colour p-3 ">
        <Row>
          <Col xl={2}>
            <div className="d-flex align-items-center justify-content-center justify-content-between logo_background">
              <span>
                <img src={logo} alt="" />
              </span>

              <span className="icone-background ">
                <FaBars />
              </span>
            </div>
          </Col>
          <Col className="position-relative " xl={7}>
            {/* Search input field */}
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="search-input"
            />

            <CiSearch className="position-absolute search-icon" />

            <TbAdjustmentsHorizontal className="position-absolute adjustments-icon " />
          </Col>

          <Col className="d-flex gap-4" xl={3}>
            <span className="icone-background">
              <IoNotificationsOutline />
            </span>
            <span className="icone-background-one">
              <IoLanguageSharp />
            </span>
            <span className="icone-background">
              <TbAccessPoint />
            </span>
            <span className="icone-background-one">
              <BsArrowsFullscreen />
            </span>

            <div className=" d-flex gap-2 icone-background-one">
              <span>
                <img className="profile" src={profile} alt="" />
              </span>
              <span>
                <IoSettingsOutline />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
