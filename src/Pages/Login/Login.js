import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="row">
        <div className="col-md-4">
          <h2 className="login-title">
            Globetech <br /> Company Limited
          </h2>
          <p className="login-subtitle">
            Make yourself digitalized & more effecient
          </p>
        </div>
        <div className="col-md-8 form-section d-flex align-items-center justify-content-center">
          <div className="login-form-box">
            <h3 className="form-header-title">Welcome</h3>
            <p className="form-header-subtitle">Sign in to your account</p>

            <input type="email" name="" placeholder="Email" />
            <br />
            <input type="password" name="" placeholder="Password" />
            <br />
            <input type="submit" value="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
