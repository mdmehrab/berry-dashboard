import logo from "../../assets/svg/logo.svg";
import { FaBars } from "react-icons/fa";
import { Form } from "react-bootstrap";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsArrowsFullscreen } from "react-icons/bs";
import { TbAccessPoint } from "react-icons/tb";
import { IoLanguage } from "react-icons/io5";

import "./header.scss";

function Header() {
  return (
    <>
      <section className="d-flex bg-info p-3">
        <div className="Logo-section d-flex justify-content-between align-items-center">
          <span>
            <img src={logo} alt="logo" />
          </span>

          <span className="desten">
            <FaBars />
          </span>
        </div>

        <div>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </div>

        <div>
          <span>
            <IoNotificationsOutline />
          </span>
          <span>
            <BsArrowsFullscreen />
          </span>

          <span>
            <TbAccessPoint />
          </span>

          <span>
            <IoLanguage />
          </span>
        </div>
      </section>
    </>
  );
}

export default Header;
