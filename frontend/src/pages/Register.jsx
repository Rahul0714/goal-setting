import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
// import "../index.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
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
  const { name, email, password, password2 } = formData;
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please Create an Account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit} autoComplete="off">
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Enter Name"
              onChange={onChange}
            />
          </div>
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
            <input
              type="password"
              name="password2"
              id="password2"
              value={password2}
              placeholder="Confirm Password"
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

export default Register;
