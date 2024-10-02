import logo from "../../assets/svg/logo.svg";
import { Form } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <section>
        <div>
          <img src={logo} alt="" srcset="" />
          <h1>Sign Up For Free</h1>
        </div>

        <div>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputCustom">Email address</label>
          </Form.Floating>
          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>

          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Confirm password"
            />
            <label htmlFor="floatingPasswordCustom">Confirm password</label>
          </Form.Floating>
        </div>
      </section>
    </>
  );
};

export default Register;
