import React from "react";
import "./App.css";
class Resume extends React.Component {
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
        <div
          style={{
            border: "2px solid black",
            width: "50%",
            justifyContent: "center",
            marginLeft: "25%",
            backgroundColor: "grey"
          }}
        >
          <form
            name="contactform"
            className="contactform"
            onSubmit={this.contactSubmit.bind(this)}
          >
            <div className="col-md-6">
              <fieldset>
                <br />
                <span>Name: </span>&ensp;&ensp;
                <input
                  ref="name"
                  type="text"
                  size="30"
                  placeholder="Name"
                  onChange={this.handleChange.bind(this, "name")}
                  value={this.state.fields["name"]}
                />
                <span className="error">{this.state.errors["name"]}</span>
                <br />
                <br />
                <span>Email : </span>&ensp;&nbsp;&nbsp;
                <input
                  refs="email"
                  type="text"
                  size="30"
                  placeholder="Email"
                  onChange={this.handleChange.bind(this, "email")}
                  value={this.state.fields["email"]}
                />
                <span className="error">{this.state.errors["email"]}</span>
                <br />
                <br />
                <span>Phone : </span>&ensp;&nbsp;
                <input
                  required
                  refs="phone"
                  type="text"
                  size="30"
                  placeholder="Phone"
                  onChange={this.handleChange.bind(this, "phone")}
                  value={this.state.fields["phone"]}
                />
                <br />
                <br />
                <span>Address : </span>
                <input
                  required
                  refs="address"
                  type="text"
                  size="30"
                  placeholder="Address"
                  onChange={this.handleChange.bind(this, "address")}
                  value={this.state.fields["address"]}
                />
                <br />
                <br />
                <br />
                <span>Skills : </span>
                <input
                  type="checkbox"
                  id="Programming"
                  name="Programming"
                  value="Bike"
                />
                <span for="Programming"> Programming</span> &ensp;
                <input
                  type="checkbox"
                  id="development"
                  name="development"
                  value="Car"
                />
                <span for="development"> Development</span>&ensp;
                <input type="checkbox" id="design" name="design" value="Boat" />
                <span for="design"> Design</span>&ensp;
                <input
                  type="checkbox"
                  id="testing"
                  name="testing"
                  value="Boat"
                />
                <span for="testing">Testing</span>
                <br />
                <br />
              </fieldset>
            </div>{" "}
            <br />
            <div className="col-md-6">
              <fieldset>
                <textarea
                  refs="message"
                  cols="68"
                  rows="10"
                  className="comments"
                  placeholder="Certification and Projects Details"
                  onChange={this.handleChange.bind(this, "message")}
                >
                  {this.state.fields["message"]}
                </textarea>
              </fieldset>
            </div>{" "}
            <br />
            <div className="col-md-12">
              <fieldset>
                <span>First click here to verify element</span> &nbsp; &ensp;&ensp;&ensp;&ensp;
                <button className="btn btn-lg pro" id="submit" value="Submit">
                  verify
                </button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Resume;
