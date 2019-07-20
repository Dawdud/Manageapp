import React, { Component } from "react";
import axios from "axios";
class LoginFrom extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "", password: "", email: "" };
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { password, email } = this.state;
    const user = { password, email };

    axios
      .post("http://localhost:8080/users/login", user)
      .then(() => console.log("User created", user))
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="login">
        <h1 className="App-Intro"> {this.state.apiResponse}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input name="email" onChange={this.handleInputChange} type="text" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              onChange={this.handleInputChange}
              type="password"
            />
          </div>
          <div className="input-field">
            <button className="btn pink" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
  callApi() {
    fetch("http://localhost:8080/users/login")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
    this.callApi();
  }
}
export default LoginFrom;
