import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SearchById extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeZipCode = this.onChangeZipCode.bind(this);
    this.onChangeDateJoined = this.onChangeDateJoined.bind(this);
    this.state = this.resetState();
    this.state.errors = {};
    this.filtered=false;

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

  resetState() {
    return {
      id: "",
    };
  }

  async onSubmit(e) {
     e.preventDefault();
    // document.location.reload()

  
    axios
      .get("http://localhost:8080/customers/"+this.state.id.toString())
      .then(res => {
        console.log(res.data);
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Find Customer By ID</h3>

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
          </div>
          <br/>
          <div className="form-group">
            <input
              class="submit"
              type="submit"
              value="Search for Customer"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
