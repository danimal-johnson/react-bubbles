import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "Lambda School",
    password: "i<3Lambd4" //TODO: Remove before deployment
  });

  const handleChange = props => event => {
    setCredentials({ ...credentials, [props]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios      
    .post("http://localhost:5000/api/login", credentials)
    .then(res => {
      console.log('response', res);
      sessionStorage.setItem("token", res.data.payload);
      props.history.push('/bubbles');
    })
    .catch(err => {
      console.error('Error', err);
    });
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div className="container">
      <h1>Welcome to the Bubble App!</h1>
        <div className="formContainer">
          <h2>Please login to continue</h2>
          <form action="http://localhost:5000">
            Login:<br />
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange("username")}
            />
            <br />
            Password:<br />
            <input type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange("password")}
            />
            <br /><br />
            <button
              type="button"
              value="Submit"
              onClick={handleSubmit}>Login
            </button>
          </form>
      </div>
    </div>
  );
};

export default Login;
