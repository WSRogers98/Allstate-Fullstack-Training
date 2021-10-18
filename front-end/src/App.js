import React from "react";
import "./App.css";
import TableRow from "./TableRow";
import axios from "axios";
import Create from "./create";
import Update from "./update"
import Delete from "./delete"
import SearchById from "./searchbyid"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
import Header from "./Header";
import logo from "./allstate.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { customers: []};
  }


  async componentDidMount() {
    axios
      .get("http://localhost:8080/customers")
      .then(response => {
        console.log(response.data);
        this.setState({ customers: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.customers.map(function(object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }
  render() {
    return (   
      <Router>
      <div>
       <Header/>
      </div>
        <div className="container" >
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              Insurance Policy Holders
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={"/searchbyid"} className="nav-link">
                    Search By ID
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/create"} className="nav-link">
                    Add a New Policy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/update"} className="nav-link">
                    Edit a Policy
                  </Link>
                </li>
                 <li className="nav-item">
                  <Link to={"/delete"} className="nav-link">
                    Delete a Policy
                  </Link>
                </li>
              </ul>
            </div>
          </nav>{" "}
          <br />     
          <h1 class="center">Insurance Policy Manager</h1> <br />
          <Switch>
            <Route exact path="/create" component={Create} />
            <Route path="/index" component={App} />
            <Route exact path="/update" component={Update} />
            <Route exact path="/delete" component={Delete} />
            <Route exact path="/searchbyid" component={SearchById} />
          </Switch>
        </div> 
        <div class="App">
          <h1 class="center" >Customer List</h1>
          <div className="container">
          <table border="1" width="80%" class="center">
            <thead>
              <tr>
                <th>Policy Number</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Customer's City</th>
                <th>Customer's Zip Code</th>
                <th>Policy Start Date</th>
                <th>Policy Code</th>
              </tr>
            </thead>
            <tbody>{this.tabRow()}</tbody>
          </table>
          </div>
          <div id="footer">
          <p>&copy; Copyright Allstate Insurance Company 2021</p>
          <img src={logo} alt="logo"
            width="70"
            height="50"
            alt=""
            ></img>
          </div>
          </div>
        <br/>
        <div className="container">
        <h3>Policy Coding System</h3>
          <ol>
            <li>
              <p>Collision Coverage</p>
              <li>
              <p>Liability Coverage</p>
            </li>
            <li>
              <p>Medical Payments Coverage</p>
            </li>
            <li>
              <p>Roadside Coverage</p>
            </li>
            <li>
              <p>Personal Injury Protection</p>
            </li>
            <li>
              <p>Personal Umbrella Policy</p>
            </li>
            <li>
              <p>Rental Reinmbursement Coverage</p>
            </li>
            </li>
            <h6>* numbers may be combined if a customer has multiple policies</h6>
          </ol>
          </div>
      </Router>
    );
  }
}
export default App;
