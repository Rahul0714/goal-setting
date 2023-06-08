import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
// import "../index.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const { email, password } = formData;
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and create Goals</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit} autoComplete="off">
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Enter Email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Enter Password"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
