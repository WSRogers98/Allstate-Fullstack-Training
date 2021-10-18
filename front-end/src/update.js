import React, { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeZipCode = this.onChangeZipCode.bind(this);
    this.onChangeDateJoined = this.onChangeDateJoined.bind(this);
    this.onChangePolicyCode = this.onChangePolicyCode.bind(this);
    this.state = this.resetState();
    this.state.errors = {};
  }

  onChangeId(e) {
    this.setState({
      id: e.target.value
    });
  }
  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  onChangeZipCode(e) {
    this.setState({
      zipCode: e.target.value
    });
  }
  onChangeDateJoined(e) {
    this.setState({
      dateJoined: e.target.value
    });
  }
  onChangePolicyCode(e) {
    this.setState({
      policyCode: e.target.value
    });
  }

  resetState() {
    return {
      id: "",
      firstName: "",
      lastName: "",
      city:"",
      zipCode: "",
      dateJoined:"",
      policyCode:""
    };
  }

  async onSubmit(e) {
     e.preventDefault();
    
    const obj = {
     
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      city:this.state.city,
      zipCode: this.state.zipCode,
      dateJoined: this.state.dateJoined,
      policyCode: this.state.policyCode
    };
    axios
      .put("http://localhost:8080/customers", obj)
      .then(res => {
        console.log(res.data);
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
      document.location.reload()
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Update Existing Customer</h3>

        <form onSubmit={this.onSubmit.bind(this)} autoComplete="off">
          <div className="form-row">
            <div className="form-group col-md-5">
              <label for="Id">ID: </label>
              <input
                id="id"
                type="number"
                className="form-control"
                value={this.state.id}
                onChange={this.onChangeId}
              />
            </div>
            <div className="form-group col-md-5">
              <label for="firstName">First Name: </label>
              <input
                id="firstName"
                type="text"
                className="form-control"
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-5">
              <label for="LastName">Last Name: </label>
              <input
                id="lastName"
                type="text"
                className="form-control"
                value={this.state.lastName}
                onChange={this.onChangeLastName}
              />
            </div>
            <div className="form-group col-md-5">
              <label for="city">City: </label>
              <input
                id="city"
                type="text"
                className="form-control"
                value={this.state.city}
                onChange={this.onChangeCity}
              />
            </div>
            <div className="form-group col-md-5">
              <label for="zipCode">Zip: </label>
              <input

                id="zip"
                type="number"
                className="form-control"
                value={this.state.zip}
                onChange={this.onChangeZipCode}
              />
            </div>
            <div className="form-group col-md-5">
              <label for="dateJoined">Date Joined: </label>
              <input
                id="dateJoined"
                type="text"
                className="form-control"
                value={this.state.DateJoined}
                onChange={this.onChangeDateJoined}
              />
            </div>
            <div className="form-group col-md-5">
              <label for="policyCode">Policy Code: </label>
              <input
                id="policyCode"
                type="text"
                className="form-control"
                value={this.state.DateJoined}
                onChange={this.onChangePolicyCode}
              />
            </div>
          </div>
          <br/>
          <div className="form-group">
            <input
              class="submit"
              type="submit"
              value="Update Customer"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
