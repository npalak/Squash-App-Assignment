import React from "react";
import "./App.css";
import OtpInput from "react-otp-input";
class Resume3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {}
    };
  }

  //verify otp----
  handleValidation() {
    let fields = this.state.otp;
    let errors = {};
    let formIsValid = true;

    if (typeof fields === "undefined") { 
        formIsValid = false;
        errors["otp"] = "please enter your otp code here.";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Form submitted : successfully done !!!!");
    } else {
      alert("Form has errors.");
    }
  }

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <div>
        <div className="divClass">
          <form
            name="contactform"
            className="contactform"
            onSubmit={this.contactSubmit.bind(this)}
          >
            <h4>Enter your code here </h4>
            <div className="col-md-6">
              <fieldset style={{ height: "90px", paddingLeft: "50px" }}>
                {/* otp verification */}
                <br />
                <OtpInput
                  value={this.state.otp}
                  onChange={this.handleChange}
                  numInputs={5}
                  column={50}
                  separator={<span>&nbsp;- &nbsp;</span>}
                  inputStyle={{ width: "4rem", height: "3rem" }}
                  containerStyle={{ textAlign: "center" }}
                  
                />
               
                 <span className="error">{this.state.errors["otp"]}</span>
                 <br/>
                 <br/>
              </fieldset>
            </div>{" "}
            <br />
            <div className="col-md-12">
              <fieldset>
                <button className="btn btn-lg pro" id="submit" value="Submit">
                  Submit
                </button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Resume3;
