import { FaEyeSlash } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";
import "./login.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handelPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section id="login">
      <div className="absolute setting_icon">
        <div className="curve-button">
          <IoMdSettings className="icon bg_primary" />
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <div className="bg-white p-5 rounded shadow-sm w_35">
          <div className="d-flex justify-content-center mb-4">
            <img src={logo} alt="Logo" className="cursor_pointer" />
          </div>

          <div className="text-center">
            <h4 className="fw-bold primary">Hi, Welcome Back</h4>
            <p className="text-secondary">Enter your credentials to continue</p>
          </div>

          <Form.Group className="mb-3">
            <Form.Label className="form_label fw-bold">
              Email Address / Username
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="info@codedthemes.com"
              defaultValue="info@codedthemes.com"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="form_label fw-bold">Password</Form.Label>
            <InputGroup>
              <Form.Control type={showPassword ? "password" : "text"} />
              <InputGroup.Text>
                <button onClick={handelPassword} className="border-0">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
              <Form.Check />
              <span className="ms-2 form_label text-secondary">
                Keep me logged in
              </span>
            </div>
            <a href="#" className="text-decoration-none primary form_label">
              Forgot Password?
            </a>
          </div>

          <button className="w-100 mb-3 bg_primary border-0 p-2 rounded">
            Sign In
          </button>

          <div className="d-flex justify-content-center align-items-center mb-3">
            <Link to="/register">
              <span className="form_label text-secondary cursor_pointer hover">
                Don't have an account?
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-light p-3 d-flex justify-content-between w-100">
        <a className="text-muted text-decoration-underline form_label" href="#">
          berrydashboard.io
        </a>
        <a className="text-muted text-decoration-underline form_label" href="#">
          © codedthemes.com
        </a>
      </div>
    </section>
  );
};

export default Login;
