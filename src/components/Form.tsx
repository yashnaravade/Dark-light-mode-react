import React from "react";

function Form() {
  return (
    <div className="main">
      <p className="sign" id="center">
        Sign in
      </p>
      <form className="form1">
        <input className="username" type="text" placeholder="Username" />
        <input className="password" type="password" placeholder="Password" />
        <a className="submit">
          Sign in
        </a>
        <p className="forgot" id="center">
          <a href="#">Forgot Password? </a>
        </p>
      </form>
    </div>
  );
}

export default Form;