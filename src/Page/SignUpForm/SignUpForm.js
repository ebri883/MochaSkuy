import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      // email: '',
      // password: '',
      // name: '',
      // hasAgreed: false,
      fields: {},
      errors: {}
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
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
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    //Password
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[0-9]).{8,32}$/)) {
        formIsValid = false;
        errors["password"] = "Password must 8 digits or more, number, letters";
      }
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange(field, e) {
    // let target = e.target;
    // let value = target.type === 'checkbox' ? target.checked : target.value;
    // let name = target.name;

    // this.setState({
    //   [name]: value
    // });
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  handleSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      console.log('The form was submitted with the following data:');
      console.log(this.state);
    }
  }
  render() {
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit.bind(this)}>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">Full Name</label>
            <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange.bind(this, "name")} />
            <br></br>
            <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange.bind(this, "password")} />
            <br></br>
            <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">Email Address</label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange.bind(this, "email")} />
            <br></br>
            <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange.bind(this, "hasAgreed")} />
              I agree all statements in
              <a href="" className="FormField__TermsLink">term of services</a>
            </label>
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>
            <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;