import React from "react";
import "./App.css";
class Resume2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {}
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("All things are good you can go ahead !");
    } else {
      alert("Form has errors.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div>
        <div className="divClass">
          <form
            name="contactform"
            className="contactform"
            onSubmit={this.contactSubmit.bind(this)}
          >
            <h4>Company Details</h4>
            <div className="col-md-6">
              <fieldset>
                <img
                  alt="uploadimage"
                  src="file:///home/lenovo/Downloads/user.png"
                />
                &ensp;
                <label for="img">Select image:</label>&ensp;
                <input type="file" id="img" name="img" accept="image/*" />
              </fieldset>
            </div>{" "}
            <br />
            <div className="col-md-6">
              <fieldset>
                <br />
                <span>Company Name</span>
                <br />
                <input
                  ref="name"
                  type="text"
                  size="30"
                  onChange={this.handleChange.bind(this, "name")}
                  value={this.state.fields["name"]}
                /><br />
                <span className="error">{this.state.errors["name"]}</span>
                <br />
              
                <span>Email Id </span>
                <br />
                <input
                  refs="email"
                  type="text"
                  size="30"
                  onChange={this.handleChange.bind(this, "email")}
                  value={this.state.fields["email"]}
                /><br />
                <span className="error">{this.state.errors["email"]}</span>
                <br />
                
                <span>Job Title</span>
                <br />
                <input
                  required
                  refs="job"
                  type="text"
                  size="30"
                  onChange={this.handleChange.bind(this, "job")}
                  value={this.state.fields["job"]}
                />
                <br />
                <br />
                <span>Years Of Experience</span>
                <br />
                <input
                  required
                  refs="address"
                  type="text"
                  size="30"
                  onChange={this.handleChange.bind(this, "address")}
                  value={this.state.fields["address"]}
                />
                <br />
                <br />

                <input
                  type="checkbox"
                  id="Programming"
                  name="Programming"
                  value="Bike"
                />
                <span for="Programming"> I accept the Term and Condition</span>
              </fieldset>
            </div>{" "}
            <br />
            <div className="col-md-12">
              <fieldset>
                <button className="btn btn-lg pro" id="submit" value="Submit">
                  Verify
                </button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Resume2;
