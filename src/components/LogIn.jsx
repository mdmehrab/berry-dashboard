import { FaEyeSlash } from "react-icons/fa6";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function LogIn() {
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100 bg-primary bg-opacity-10">
        <div className="bg-white p-5 w-50 rounded">
          <div className="p-3">
            <div className="d-flex justify-content-center">
              <h2>Dashboard</h2>
            </div>

            <span className="d-flex justify-content-center">
              Hi, Welcome Back
            </span>
            <p className="d-flex justify-content-center">
              Enter your credentials to continue
            </p>
          </div>

          {/* Email Input Field */}
          <Form.Group className="mb-3">
            <Form.Label>Email address/Username</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          {/* Password Input Field */}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputGroup.Text>
                <FaEyeSlash />
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </div>
      </div>
    </>
  );
}
