import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let responseGoogle = data => {
      console.log(data);
    };
    return (
      <div className="home">
        <h1>Welcome</h1>
        <br />
        <GoogleLogin
          clientId="780021042626-li4g2v5l3pr2s4kdmssdsdtcuc0v2e6m.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}

export default Home;