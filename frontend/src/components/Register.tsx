import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import isEmail from "validator";

import { register } from "../actions/authActions";

const Register = () => {
  // const form = useRef(null);
  // const checkBtn = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [successful, setSuccessful] = useState(false);

  // const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeFirstName = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };

  const onChangeLastName = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // setSuccessful(false);
    // form.current.validateAll();
    // if (checkBtn.current.context._errors.length === 0) {
    dispatch(register(firstName, lastName, email, password))
      .then(() => {
        // setSuccessful(true);
        navigate("/");
      })
      .catch(() => {
        // setSuccessful(false);
      });
    // }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <form>
          <div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={onChangeEmail}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
              />
            </div>

            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={firstName}
                onChange={onChangeFirstName}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={lastName}
                onChange={onChangeLastName}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                onClick={handleRegister}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
